import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../layout/Layout';

function LandCover() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [classificationUrl, setClassificationUrl] = useState(null);
  const [lucUrl, setLucUrl] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // Send the image to Flask for uploading
      axios.post('http://localhost:5000/uploadlandcover', formData)
        .then(response => {
          setImageUrl(response.data.file_path); // Store the uploaded image path
        })
        .catch(err => {
          setError("Error uploading file");
          console.error(err);
        });
    }
  };

  // Process the image (Generate composite or classification)
  const handleProcessImage = (endpoint, setResultUrl) => {
    setProcessing(true);
    setError(null);

    axios.get(endpoint, { params: { file_path: imageUrl } })
      .then(response => {
        setProcessing(false);
        setResultUrl(response.data.image_url); // Update the image URL to display result
      })
      .catch(err => {
        setProcessing(false);
        setError("Error processing image");
        console.error(err);
      });
  };

  // Classify the image (this could be a different endpoint)
  const handleClassifyImage = () => {
    setProcessing(true);
    setError(null);

    axios.get('http://localhost:5000/classify', { params: { file_path: imageUrl } })
      .then(response => {
        setProcessing(false);
        setClassificationUrl(response.data.image_url); // Store the classified image URL
      })
      .catch(err => {
        setProcessing(false);
        setError("Error classifying image");
        console.error(err);
      });
  };

  // Generate LUC
  const handleGenerateLUC = () => {
    setProcessing(true);
    setError(null);

    axios.get('http://localhost:5000/generate_luc', { params: { file_path: imageUrl } })
      .then(response => {
        setProcessing(false);
        setLucUrl(response.data.png_view_url); // Store the LUC image URL
      })
      .catch(err => {
        setProcessing(false);
        setError("Error generating LUC");
        console.error(err);
      });
  };

  // Download processed images
  const handleDownloadImage = (url) => {
    axios({
      url: `http://localhost:5000/${url}`,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const blob = response.data;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = url.split('/').pop(); // Extract filename from URL
      link.click();
    }).catch(err => {
      setError("Error downloading image");
      console.error(err);
    });
  };

  return (
    <>
      <Layout>
        <div className="land-cover-container content">
          <h2>Land Cover Classification</h2>

          {/* Image upload section */}
          <div className="upload-section">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUrl && <p>Uploaded image path: {imageUrl}</p>}
          </div>

          {/* Process image buttons */}
          {imageUrl && !processing && (
            <div className="process-section">
              <button onClick={() => handleProcessImage('http://localhost:5000/processlandcover', setResultUrl)}>Generate Composite</button>
              <button onClick={handleClassifyImage}>Classify Image</button>
              <button onClick={handleGenerateLUC}>Generate LUC</button>
            </div>
          )}

          {/* Displaying processing state */}
          {processing && <p>Processing...</p>}

          {/* Error handling */}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Image display */}
          {resultUrl && !processing && (
            <div className="result-section">
              <h3>Processed Image</h3>
              <img src={`http://localhost:5000/${resultUrl}`} alt="Processed result" style={{ width: '100%' }} />
            </div>
          )}

          {/* Classified image display */}
          {classificationUrl && !processing && (
            <div className="classification-result-section">
              <h3>Classified Image</h3>
              <img src={`http://localhost:5000/${classificationUrl}`} alt="Classified result" style={{ width: '100%' }} />
            </div>
          )}

          {/* LUC Image display */}
          {lucUrl && !processing && (
            <div className="luc-result-section">
              <h3>LUC Image</h3>
              <img src={`http://localhost:5000/${lucUrl}`} alt="LUC result" style={{ width: '100%' }} />
            </div>
          )}

          {/* Download Buttons */}
          {imageUrl && !processing && (
            <div className="download-section">
              <button onClick={() => handleDownloadImage(resultUrl)}>Download Processed Image</button>
              {classificationUrl && (
                <button onClick={() => handleDownloadImage(classificationUrl)}>Download Classified Image</button>
              )}
              {lucUrl && (
                <button onClick={() => handleDownloadImage(lucUrl)}>Download LUC Image</button>
              )}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default LandCover;
