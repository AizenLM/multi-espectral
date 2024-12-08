from PIL import Image
import numpy as np
from flask import Flask, request, jsonify, send_from_directory, send_file;
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import rasterio
from rasterio.plot import show
from rasterio import open as rio_open
import rasterio as rio
from io import BytesIO
import matplotlib.pyplot as plt
from datetime import datetime

import matplotlib
from LandCover import normalize_band, prepare_sample, train_model, plot_confusion_matrix
matplotlib.use('Agg')


app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'
PROCESSED_FOLDER = 'processed'
OUTPUT_DIR = 'output/'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)
# Asegúrate de que el directorio de salida existe
os.makedirs(OUTPUT_DIR, exist_ok=True)
RESULTADOS_DIR = 'resultados'
os.makedirs(RESULTADOS_DIR, exist_ok=True)

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

    # Obtener la marca de tiempo para evitar sobrescribir archivos con el mismo nombre
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    unique_filename = f"{timestamp}_{filename}"
    filepath = os.path.join(UPLOAD_FOLDER, unique_filename)
    file.save(filepath)

    # Leer la imagen multiespectral usando Rasterio
    with rasterio.open(filepath) as src:
        image = src.read()  # Leer todas las bandas
        num_bands = src.count  # Número de bandas

    if image is None or num_bands == 0:
        return jsonify({"error": "No se pudo leer la imagen"}), 400

    band_images = []        # Lista para imágenes PNG
    band_images_tiff = []   # Lista para imágenes TIFF

    # Combinación en color falso usando tres bandas (normalmente R, G, B)
    if num_bands >= 3:
        rgb_image = np.dstack((image[0], image[1], image[2]))  # Combina las primeras tres bandas
        rgb_image = np.clip(rgb_image, 0, 255).astype('uint8')  # Normaliza la imagen a un formato adecuado

        # Mostrar la imagen RGB combinada
        fig, ax = plt.subplots()
        ax.imshow(rgb_image)
        ax.set_title('Imagen RGB Falso Color')
        ax.axis('off')

        # Guardar la imagen RGB en un buffer PNG
        buffer_png = BytesIO()
        plt.savefig(buffer_png, format='png')
        buffer_png.seek(0)
        plt.close(fig)

        # Guardar la imagen RGB procesada en la carpeta de procesados (PNG)
        rgb_filename_png = f'rgb_{timestamp}_{filename}.png'
        rgb_image_path_png = os.path.join(PROCESSED_FOLDER, rgb_filename_png)
        with open(rgb_image_path_png, 'wb') as f:
            f.write(buffer_png.getvalue())

        # Guardar la imagen RGB en formato TIFF
        rgb_filename_tiff = f'rgb_{timestamp}_{filename}.tiff'
        rgb_image_path_tiff = os.path.join(PROCESSED_FOLDER, rgb_filename_tiff)
        with rasterio.open(
            rgb_image_path_tiff,
            'w',
            driver='GTiff',
            height=rgb_image.shape[0],
            width=rgb_image.shape[1],
            count=3,
            dtype=rgb_image.dtype
        ) as dst:
            dst.write(rgb_image[:, :, 0], 1)  # Red
            dst.write(rgb_image[:, :, 1], 2)  # Green
            dst.write(rgb_image[:, :, 2], 3)  # Blue

        # Añadir las URLs a las listas correspondientes
        band_images.append({
            "name": "Imagen RGB Falso Color",
            "image_url_png": f"/processed/{rgb_filename_png}"
        })

        band_images_tiff.append({
            "name": "Imagen RGB Falso Color",
            "image_url_tiff": f"/processed/{rgb_filename_tiff}"
        })

    # Procesar la imagen original y guardarla como imagen PNG
    fig, ax = plt.subplots()
    show(image[0], ax=ax)  # Mostrar la primera banda como representación de la imagen
    ax.set_title('Imagen Original')
    ax.axis('off')

    # Guardar la imagen original en un buffer PNG
    buffer_png = BytesIO()
    plt.savefig(buffer_png, format='png')
    buffer_png.seek(0)
    plt.close(fig)

    # Guardar la imagen original en la carpeta de procesados (PNG)
    original_filename_png = f'original_{timestamp}_{filename}.png'
    original_image_path_png = os.path.join(PROCESSED_FOLDER, original_filename_png)
    with open(original_image_path_png, 'wb') as f:
        f.write(buffer_png.getvalue())

    # Guardar la imagen original en formato TIFF
    original_filename_tiff = f'original_{timestamp}_{filename}.tiff'
    original_image_path_tiff = os.path.join(PROCESSED_FOLDER, original_filename_tiff)
    with rasterio.open(
        original_image_path_tiff,
        'w',
        driver='GTiff',
        height=image.shape[1],
        width=image.shape[2],
        count=1,
        dtype=image.dtype
    ) as dst:
        dst.write(image[0], 1)  # Guardar solo la primera banda (como imagen original)

    # Añadir las URLs a las listas correspondientes
    band_images.append({
        "name": "Imagen Original",
        "image_url_png": f"/processed/{original_filename_png}"
    })

    band_images_tiff.append({
        "name": "Imagen Original",
        "image_url_tiff": f"/processed/{original_filename_tiff}"
    })

    # Procesar cada banda y guardarla como imagen PNG y TIFF
    for i in range(num_bands):
        band = image[i]  # Rasterio maneja las bandas individualmente
        fig, ax = plt.subplots()
        ax.imshow(band, cmap='gray')
        ax.set_title(f'Banda {i + 1}')
        ax.axis('off')

        # Guardar la imagen de la banda en un buffer PNG
        buffer_png = BytesIO()
        plt.savefig(buffer_png, format='png')
        buffer_png.seek(0)
        plt.close(fig)

        # Guardar la banda procesada como PNG
        band_filename_png = f'band_{i + 1}_{timestamp}_{filename}.png'
        band_image_path_png = os.path.join(PROCESSED_FOLDER, band_filename_png)
        with open(band_image_path_png, 'wb') as f:
            f.write(buffer_png.getvalue())

        # Guardar la banda procesada como TIFF
        band_filename_tiff = f'band_{i + 1}_{timestamp}_{filename}.tiff'
        band_image_path_tiff = os.path.join(PROCESSED_FOLDER, band_filename_tiff)
        with rasterio.open(
            band_image_path_tiff,
            'w',
            driver='GTiff',
            height=band.shape[0],
            width=band.shape[1],
            count=1,
            dtype=band.dtype
        ) as dst:
            dst.write(band, 1)  # Guardar la banda como TIFF

        # Añadir las URLs a las listas correspondientes
        band_images.append({
            "name": f"Banda {i + 1}",
            "image_url_png": f"/processed/{band_filename_png}"
        })

        band_images_tiff.append({
            "name": f"Banda {i + 1}",
            "image_url_tiff": f"/processed/{band_filename_tiff}"
        })

    return jsonify({
        "message": "Imagen multiespectral procesada correctamente",
        "num_bands": num_bands,
        "band_images": band_images,          # Imágenes PNG
        "band_images_tiff": band_images_tiff # Imágenes TIFF
    })
@app.route('/uploadlandcover', methods=['POST'])
def upload_image():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file part in the request."}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": "No selected file."}), 400

        upload_path = 'uploaded_image.tif'
        file.save(upload_path)
        return jsonify({"message": "File uploaded successfully", "file_path": upload_path})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/processlandcover', methods=['GET'])
def process_data():
    try:
        s2_image_path = request.args.get('file_path', 'uploaded_image.tif')

        if not os.path.exists(s2_image_path):
            return jsonify({"error": "File not found."}), 400

        s2 = rio.open(s2_image_path)
        s2_image = s2.read() / 1e4

        # Extract and normalize bands
        red = normalize_band(s2_image[2])
        green = normalize_band(s2_image[1])
        blue = normalize_band(s2_image[0])
        nir = normalize_band(s2_image[6])
        ndvi = normalize_band(s2_image[7])

        rgb = np.dstack((red, green, blue))
        fcc = np.dstack((nir, red, green))

        fig, axs = plt.subplots(1, 2, figsize=(12, 6))
        axs[0].imshow(rgb)
        axs[0].set_title("Natural Color Composite")
        axs[0].axis("off")
        axs[1].imshow(fcc)
        axs[1].set_title("False Color Composite")
        axs[1].axis("off")

        output = BytesIO()
        plt.tight_layout()
        plt.savefig(output, format="png")
        output.seek(0)

        output_path = 'static/composites.png'
        with open(output_path, 'wb') as f:
            f.write(output.read())
        
        plt.close()

        return jsonify({"image_url": "/static/composites.png"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/classify', methods=['GET'])
def classify_data():
    try:
        sample = prepare_sample()
        if sample.empty:
            return jsonify({"error": "Sample data is empty or could not be loaded."}), 500

        s2_image_path = request.args.get('file_path', 'uploaded_image.tif')
        rf_model, x_test, y_test = train_model(sample, s2_image_path)

        y_pred = rf_model.predict(x_test)
        output = plot_confusion_matrix(y_test, y_pred)

        output_path = 'static/confusion_matrix.png'
        with open(output_path, 'wb') as f:
            f.write(output.read())
        
        plt.close()

        return jsonify({"image_url": "/static/confusion_matrix.png"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/generate_luc', methods=['GET'])
def generate_luc():
    try:
        if not os.path.exists('rasters'):
            os.makedirs('rasters')

        s2_image_path = request.args.get('file_path', 'uploaded_image.tif')

        s2 = rio.open(s2_image_path)
        s2_image = s2.read() / 1e4

        red = normalize_band(s2_image[2])
        green = normalize_band(s2_image[1])
        blue = normalize_band(s2_image[0])
        nir = normalize_band(s2_image[6])
        ndvi = normalize_band(s2_image[7])

        bands = np.stack([red, green, blue, nir, ndvi], axis=-1)
        reshaped_bands = bands.reshape((-1, bands.shape[2]))
        luc_classification = (reshaped_bands.mean(axis=1) > 0.5).astype(int)
        luc_classification = luc_classification.reshape((s2.height, s2.width))

        output_path_tif = 'rasters/luc.tif'
        with rio.open(output_path_tif, 'w', driver='GTiff', count=1, dtype='uint8', crs=s2.crs, transform=s2.transform, width=s2.width, height=s2.height) as dst:
            dst.write(luc_classification, 1)

        output_path_png = 'rasters/luc.png'
        with Image.open(output_path_tif) as img:
            img.save(output_path_png, 'PNG')

        return jsonify({
            "message": "Files generated successfully",
            "tif_download_url": "/download_luc_tif",
            "png_view_url": "/download_luc_png"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/download_luc_tif', methods=['GET'])
def download_luc_tif():
    try:
        output_path_tif = 'rasters/luc.tif'
        return send_file(output_path_tif, as_attachment=True, download_name="luc.tif")
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/download_luc_png', methods=['GET'])
def download_luc_png():
    try:
        output_path_png = 'rasters/luc.png'
        return send_file(output_path_png, as_attachment=False, download_name="luc.png", mimetype='image/png')
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
