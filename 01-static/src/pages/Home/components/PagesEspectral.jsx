import React from "react";

export const PagesEspectral = () => {
  return (
    <>
      <section>
        <h2>¿Dónde conseguir imágenes multiespectrales?</h2>
        <div className="image-source-container">
          <a
            href="https://earthdata.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="source-box"
          >
            <h3>NASA EarthData</h3>
            <img
              src="https://oasishub.co/uploads/group/2017-07-27-085017.923724logoNASA.jpg"
              alt="img of nasa earth data"
            ></img>
            <p>
              Accede a una amplia gama de datos satelitales y descarga imágenes
              multiespectrales de diversas misiones.
            </p>
            <span>Visitar</span>
          </a>
          <a
            href="https://earthexplorer.usgs.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="source-box"
          >
            <h3>USGS Earth Explorer</h3>
            <img
              src="https://lpdaac.usgs.gov/static/USGS_whitelogo.png"
              alt="logo USGS"
            ></img>
            <p>
              Herramienta integral para acceder a imágenes satelitales
              multiespectrales de múltiples fuentes, incluyendo Landsat.
            </p>
            <span>Visitar</span>
          </a>
          <a
            href="https://www.sentinel-hub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="source-box"
          >
            <h3>Sentinel Hub</h3>
            <img
              src="https://i.ytimg.com/vi/uBinB7CXbzg/maxresdefault.jpg"
              alt="sentinel hub logo"
            />
            <p>
              Proporciona acceso a imágenes de satélites Sentinel, con un
              servicio de visualización para datos multiespectrales.
            </p>
            <span>Visitar</span>
          </a>
          <a
            href="https://www.copernicus.eu/en"
            target="_blank"
            rel="noopener noreferrer"
            className="source-box"
          >
            <h3>Copernicus</h3>
            <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/07/Copernicus-Eyes-on-Earth.jpg"></img>

            <p>
              Programa de la Unión Europea que proporciona acceso a una amplia
              gama de datos de observación de la Tierra, incluyendo imágenes
              multiespectrales de los satélites Sentinel.
            </p>
            <span>Visitar</span>
          </a>
        </div>
      </section>
    </>
  );
};
