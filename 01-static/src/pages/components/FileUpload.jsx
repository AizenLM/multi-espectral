import React from "react";
import './FileUpload.css'; // Importa el archivo de estilos

function FileUpload({ onFileChange }) { // Recibe la función como prop
    return (
        <div className="file-upload-container">
            <label htmlFor="file-upload" className="custom-file-upload">
                Seleccionar archivos
            </label>
            <input
                id="file-upload"
                type="file"
                multiple
                onChange={onFileChange} // Llama a la función prop cuando cambia el input
                className="file-input"
            />
        </div>
    );
}

export default FileUpload;
