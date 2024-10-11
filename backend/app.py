from PIL import Image
import numpy as np
from flask import Flask, request, jsonify, send_from_directory, send_file;
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import rasterio
from rasterio.plot import show
from io import BytesIO
import matplotlib.pyplot as plt

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'
PROCESSED_FOLDER = 'processed'
OUTPUT_DIR = 'output/'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)
# Asegúrate de que el directorio de salida existe
os.makedirs(OUTPUT_DIR, exist_ok=True)

@app.route('/combinar', methods=['POST'])
def combinar_bandas():
    if 'files' not in request.files:
        return jsonify({'error': 'No files part'})

    files = request.files.getlist('files')
    band_files = []

    # Guardar los archivos en una carpeta temporal
    os.makedirs('uploads', exist_ok=True)
    for file in files:
        filepath = os.path.join('uploads', file.filename)
        file.save(filepath)
        band_files.append(filepath)

    # Combinar las bandas en un solo archivo TIFF
    data = []
    for banda in band_files:
        with rasterio.open(banda) as src:
            data.append(src.read(1))  # Leer la primera banda

    height, width = data[0].shape

    # Crear el archivo TIFF multibanda
    output_filepath = 'salida_multibanda.tif'
    with rasterio.open(output_filepath, 'w', driver='GTiff', height=height, width=width, count=len(data), dtype='float32') as dst:
        for i, banda_data in enumerate(data):
            dst.write(banda_data, i + 1)

    return send_file(output_filepath, as_attachment=True), 200, {
        'Content-Disposition': 'attachment; filename=salida_multibanda.tif'
    }


@app.route('/processed/<path:filename>', methods=['GET'])
def send_processed_file(filename):
    return send_from_directory(PROCESSED_FOLDER, filename)

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    return send_file(os.path.join(OUTPUT_DIR, filename), as_attachment=True)

@app.route('/espectro', methods=['POST'])
def procesar_imagen_espectro():
    if 'image' not in request.files:
        return jsonify({"error": "No se encontró la imagen"}), 400

    file = request.files['image']
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    # Leer la imagen multiespectral usando Rasterio
    with rasterio.open(filepath) as src:
        image = src.read()  # Leer todas las bandas
        num_bands = src.count  # Número de bandas

    if image is None or num_bands == 0:
        return jsonify({"error": "No se pudo leer la imagen"}), 400

    band_images = []

    # Combinación en color falso usando tres bandas (normalmente R, G, B)
    if num_bands >= 3:
        rgb_image = np.dstack((image[0], image[1], image[2]))  # Combina las primeras tres bandas
        rgb_image = np.clip(rgb_image, 0, 255).astype('uint8')  # Normaliza la imagen a un formato adecuado

        # Mostrar la imagen RGB combinada
        fig, ax = plt.subplots()
        ax.imshow(rgb_image)
        ax.set_title('Imagen RGB Falso Color')
        ax.axis('off')

        # Guardar la imagen RGB en un buffer
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        plt.close(fig)

        # Guardar la imagen RGB procesada en la carpeta de procesados
        rgb_filename = f'rgb_{filename}.png'
        rgb_image_path = os.path.join(PROCESSED_FOLDER, rgb_filename)
        with open(rgb_image_path, 'wb') as f:
            f.write(buffer.getvalue())

        band_images.append({
            "name": "Imagen RGB Falso Color",
            "image_url": f"/processed/{rgb_filename}"
        })

    # Procesar la imagen original y guardarla como imagen PNG
    fig, ax = plt.subplots()
    show(image[0], ax=ax)  # Mostrar la primera banda como representación de la imagen
    ax.set_title('Imagen Original')
    ax.axis('off')

    # Guardar la imagen original en un buffer
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    plt.close(fig)

    # Guardar la imagen original en la carpeta de procesados
    original_filename = f'original_{filename}.png'
    original_image_path = os.path.join(PROCESSED_FOLDER, original_filename)
    with open(original_image_path, 'wb') as f:
        f.write(buffer.getvalue())

    band_images.append({
        "name": "Imagen Original",
        "image_url": f"/processed/{original_filename}"
    })

    # Procesar cada banda y guardarla como imagen PNG en escala de grises
    for i in range(num_bands):
        band = image[i]  # Rasterio maneja las bandas individualmente
        fig, ax = plt.subplots()
        ax.imshow(band, cmap='gray')
        ax.set_title(f'Banda {i + 1}')
        ax.axis('off')

        # Guardar la imagen de la banda en un buffer
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        plt.close(fig)

        # Guardar la banda procesada
        band_filename = f'band_{i + 1}_{filename}.png'
        band_image_path = os.path.join(PROCESSED_FOLDER, band_filename)
        with open(band_image_path, 'wb') as f:
            f.write(buffer.getvalue())

        band_images.append({
            "name": f"Banda {i + 1}",
            "image_url": f"/processed/{band_filename}"
        })

    return jsonify({
        "message": "Imagen multiespectral procesada correctamente",
        "num_bands": num_bands,
        "band_images": band_images
    })

if __name__ == '__main__':
    app.run(debug=True)
