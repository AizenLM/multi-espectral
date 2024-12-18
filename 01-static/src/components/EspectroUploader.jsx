import React, { useState } from 'react';
import axios from 'axios';

const EspectroUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [bandImages, setBandImages] = useState([]);
  const [originalImage, setOriginalImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGif, setIsGif] = useState(false); // Nuevo estado para manejar si es GIF

  // Manejar la selección de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setError('');
    
    // Detectar si el archivo es un GIF
    if (file && file.type === 'image/gif') {
      setIsGif(true);
    } else {
      setIsGif(false);
    }
  };

  // Enviar la imagen al servidor
  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Por favor, selecciona una imagen multiespectral o un GIF.');
      return;
    }

    setLoading(true);
    setBandImages([]);
    setOriginalImage(null); // Reiniciar imagen original
    setError('');

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/espectro', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { band_images, num_frames } = response.data;

      // Si es un GIF, tratamos cada frame como una banda
      if (isGif && num_frames) {
        setBandImages(band_images);
        const firstFrameUrl = `http://localhost:5000${band_images[0].image_url}`;
        setOriginalImage(firstFrameUrl); // Usar el primer frame como "original"
      } else {
        setBandImages(band_images);

        // Establecer la imagen original para imágenes multiespectrales
        const originalImageUrl = `http://localhost:5000${band_images[0].image_url}`; // Suponiendo que la imagen original está en la primera posición
        setOriginalImage(originalImageUrl);
      }
    } catch (err) {
      setError('Ocurrió un error al procesar la imagen.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='content'>
      <h1>Procesar Imagen Multiespectral</h1>

      <input type="file" onChange={handleFileChange} accept=".tiff,.tif,.gif,.png,.jpg,.jpeg" />
      <button className='btn-primary' onClick={handleUpload} disabled={loading}>
        {loading ? 'Procesando...' : 'Subir y Procesar Imagen'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {originalImage && ( // Mostrar la imagen original
          <div style={{ margin: '20px 0' }}>
            <h2>{isGif ? 'Primer Frame del GIF' : 'Imagen Original'}:</h2>
            <img
              src={originalImage}
              alt="Imagen Original"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        )}
        
        {bandImages.length > 0 && (
          <div>
            <h2>{isGif ? 'Frames del GIF' : 'Bandas Procesadas'}:</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {bandImages.map((band, index) => (
                <div className='img-more' key={index} style={{ margin: '10px' }}>
                  <h2>{band.name}</h2>
                  <img
                    src={`http://localhost:5000${band.image_url}`}
                    alt={isGif ? `Frame ${index + 1}` : `Banda ${index + 1}`}
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EspectroUploader;
