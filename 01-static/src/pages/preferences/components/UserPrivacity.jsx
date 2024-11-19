import React from 'react';

function UserPrivacity() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la configuración de privacidad actualizada
    console.log("Configuración de privacidad guardada");
  };

  return (
    <>
      <form className="form-modif-user animate__animated animate__backInLeft" onSubmit={handleSubmit}>
        <div>
          <h2>Configuración de Privacidad</h2>
          <hr />

          {/* Configuración de privacidad */}
          <div>
            <label htmlFor="showOnlineStatus">Mostrar estado en línea: </label>
            <select name="showOnlineStatus" defaultValue="on">
              <option value="on">Activado</option>
              <option value="off">Desactivado</option>
            </select>
          </div>

          <div>
            <label htmlFor="searchEngineIndexing">
              Permitir que los motores de búsqueda indexen mi perfil:
              <input
                type="checkbox"
                name="searchEngineIndexing"
                defaultChecked={false}
              />
            </label>
          </div>

          <div>
            <label htmlFor="profileVisibility">Quién puede ver mi perfil: </label>
            <select name="profileVisibility" defaultValue="everyone">
              <option value="everyone">Todos</option>
              <option value="friends">Solo amigos</option>
              <option value="noone">Nadie</option>
            </select>
          </div>

          <div>
            <label htmlFor="messageRequests">Quién puede enviarme solicitudes de mensaje: </label>
            <select name="messageRequests" defaultValue="friendsOnly">
              <option value="everyone">Todos</option>
              <option value="friendsOnly">Solo amigos</option>
              <option value="noone">Nadie</option>
            </select>
          </div>

          <div>
            <label htmlFor="taggingPermissions">
              Permitir que otros me etiqueten en publicaciones:
              <input
                type="checkbox"
                name="taggingPermissions"
                defaultChecked={true}
              />
            </label>
          </div>

          <div>
            <label htmlFor="dataDownload">Permitir descarga de mis datos: </label>
            <select name="dataDownload" defaultValue="request">
              <option value="request">Solo bajo solicitud</option>
              <option value="always">Siempre</option>
              <option value="never">Nunca</option>
            </select>
          </div>

          <div>
            <label htmlFor="locationSharing">Compartir mi ubicación: </label>
            <select name="locationSharing" defaultValue="off">
              <option value="on">Activado</option>
              <option value="off">Desactivado</option>
            </select>
          </div>

          <div>
            <button type="submit">Guardar Configuración</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserPrivacity;
