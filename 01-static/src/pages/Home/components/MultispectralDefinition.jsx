import React from "react";

export const MultispectralDefinition = () => {
  return (
    <>
      <section id="Que-son" className="animate__animated animate__fadeInUpBig">
        <h2>¿Qué son las imágenes multiespectrales?</h2>
        <div className="section-content">
          <div>
            <p>
              Las imágenes multiespectrales son imágenes capturadas a través de
              sensores que detectan diferentes bandas del espectro
              electromagnético, más allá de lo que el ojo humano puede ver
              (visible). Estas bandas incluyen partes como el infrarrojo
              cercano, ultravioleta y otras. Las imágenes multiespectrales
              permiten analizar características invisibles a simple vista, como
              la vegetación, el suelo, y la composición del agua.
            </p>
          </div>
          <div className="spectral-image">
            <img
              src="https://272c5fb8.rocketcdn.me/wp-content/uploads/2023/06/Como-funcionan-las-camaras-multiespectrales-850-%C3%97-500-px.png"
              alt="Imagen que muestra cómo funcionan las cámaras multiespectrales"
            />
          </div>
        </div>
      </section>
    </>
  );
};
