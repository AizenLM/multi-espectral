import { useState } from "react";
import axios from "axios";
import './components/FileUpload.css';

const DetectBands = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [bandImages, setBandImages] = useState([]);
  const [bandImagesTiff, setBandImagesTiff] = useState([]);  // Nuevo estado para las imágenes en TIFF
  const [originalImage, setOriginalImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isGif, setIsGif] = useState(false); // Nuevo estado para manejar si es GIF
  // Manejar la selección de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setError("");

    // Detectar si el archivo es un GIF
    if (file && file.type === "image/gif") {
      setIsGif(true);
    } else {
      setIsGif(false);
    }
  };

  // Enviar la imagen al servidor
  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Por favor, selecciona una imagen multiespectral o un GIF.");
      return;
    }

    setLoading(true);
    setBandImages([]);
    setBandImagesTiff([]);  // Limpiar las imágenes TIFF previas
    setOriginalImage(null); // Reiniciar imagen original
    setError("");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/espectro",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { band_images, band_images_tiff, num_frames } = response.data;
      console.log(response.data)
     
      // Si es un GIF, tratamos cada frame como una banda
      if (isGif && num_frames) {
        setBandImages(band_images);
        setBandImagesTiff(band_images_tiff);
        const firstFrameUrl = `http://localhost:5000${band_images[0].image_url_png}`;
        setOriginalImage(firstFrameUrl); // Usar el primer frame como "original"
      } else {
        setBandImages(band_images);
        setBandImagesTiff(band_images_tiff);

        // Establecer la imagen original para imágenes multiespectrales
        const originalImageUrl = `http://localhost:5000${band_images[0].image_url_png}`; // Suponiendo que la imagen original está en la primera posición
        setOriginalImage(originalImageUrl);
      }
    } catch (err) {
      setError("Ocurrió un error al procesar la imagen.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content animate__animated animate__heartBeat">
      <div className="panel-content">
        <h1>Procesar Imagen Multiespectral</h1>

        <div className="file-upload-container">
          <label htmlFor="file-upload" className="custom-file-upload">
            Seleccionar archivos
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept=".tiff,.tif,.gif,.png,.jpg,.jpeg"
            className="file-input"
          />
        </div>
          {/* Mostrar la cantidad de archivos seleccionados */}
          {selectedFile && (
                    <div className="file-count">
                        <p>Archivo {selectedFile.name}</p>
                    </div>
                )}
        <button
          className="btn-primary"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Procesando..." : "Subir y Procesar Imagen"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div>
        {originalImage && ( // Mostrar la imagen original
          <div className="img-original">
            <h2>{isGif ? "Primer Frame del GIF" : "Imagen Original"}:</h2>
            <img
              src={originalImage}
              alt="Imagen Original"
            />
          </div>
        )}

        {bandImages.length > 0 && (
          <div>
            <h2>{isGif ? "Frames del GIF" : "Bandas Procesadas"}:</h2>
            <div className="img-more">
              {bandImages.map((band, index) => (
                <div
                  key={index}
                  className="animate__animated animate__bounceIn imgs-bands"
                >
                  <h2>{band.name}</h2>
                  <img
                    src={`http://localhost:5000${band.image_url_png}`}
                    alt={isGif ? `Frame ${index + 1}` : `Banda ${index + 1}`}
                  />
                  {/* Enlace de descarga para el archivo TIFF */}
                  {bandImagesTiff[index] && bandImagesTiff[index].image_url_tiff ? (
                    <a
                      href={`http://localhost:5000${bandImagesTiff[index].image_url_tiff}`}
                      download
                      className="btn-download"
                    >
                     <i className="material-icons">download</i> <p>Descargar como .TIFF</p>
                    </a>
                  ) : (
                    <p>No TIFF disponible</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetectBands;
