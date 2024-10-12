import { useState } from "react";
import axios from "axios";
import BandCombinationInfo from "./components/BandCombinationInfo";
import FileUpload from "./components/FileUpload"; // Importa el nuevo componente FileUpload
function AttachBands() {
    const [files, setFiles] = useState(null);
    const [downloadLink, setDownloadLink] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(''); // Nuevo estado para manejar errores

    const handleFileChange = (event) => {
        setFiles(event.target.files);
        setError(''); // Limpiar cualquier error anterior al seleccionar nuevos archivos
    };

    const handleUpload = async () => {
        if (!files || files.length === 0) {
            setError('Por favor, selecciona al menos un archivo.');
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        try {
            setIsLoading(true);
            setError('');

            // Enviar los archivos al backend
            const response = await axios.post('http://localhost:5000/combinar', formData, {
                responseType: 'blob',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Crear un enlace para descargar el TIFF
            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadLink(url);
        } catch (error) {
            console.error('Error al combinar las bandas:', error);
            setError('Hubo un error al procesar tu solicitud. Inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="content animate__animated animate__heartBeat">
            <div className="panel-content">
                <h1>Subir Bandas Multiespectrales</h1>
                <label htmlFor="files-bands">Ingresa todas las bandas que deseas juntar</label>
                <FileUpload onFileChange={handleFileChange} /> {/* Usa el componente FileUpload */}
                {error && <div className="error">{error}</div>} {/* Mostrar errores si los hay */}

                {/* Mostrar la cantidad de archivos seleccionados */}
                {files && (
                    <div className="file-count">
                        <p>{files.length} archivo(s) seleccionado(s)</p>
                    </div>
                )}

                <button onClick={handleUpload} disabled={!files || isLoading}>
                    {isLoading ? 'Procesando...' : 'Combinar y Descargar TIFF'}
                </button>
            </div>

            {isLoading && <div className="loading">Espere, procesando tu imagen...</div>}

            {downloadLink && (
                <div className="result-tif">
                    <h3>EL ARCHIVO SE HA GENERADO CORRECTAMENTE. AHORA PUEDES DESCARGARLO</h3>
                    <a href={downloadLink} download="salida_multibanda.tif">
                        <img src="https://static.vecteezy.com/system/resources/previews/015/426/217/non_2x/tiff-file-format-icon-tiff-extension-filled-icon-free-vector.jpg" />
                    </a>
                    <p>Click en la imagen para descargar</p>
                </div>
            )}
            <BandCombinationInfo />
        </div>
    );
}

export default AttachBands;
