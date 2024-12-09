import React from 'react'

export const MultispectralFunctionality = () => {
  return (
    <>
     <section className="animate__animated animate__headShake section-multi-func">
        <h2> ¿Cómo funcionan las imágenes multiespectrales?</h2>
        <div className="section-content">
          <div className="spectral-image">
            <img
              src="https://adenilsongiovanini.com.br/blog/wp-content/uploads/2021/07/resolucao-espectral-de-satelites.jpg"
              alt="Imagen que muestra cómo funcionan las cámaras multiespectrales"
            />
          </div>
          <div>
            <p className='text-just'>
              El principio detrás de las imágenes multiespectrales es la
              capacidad de capturar datos en múltiples bandas del espectro
              electromagnético, más allá del espectro visible. Este espectro
              incluye las longitudes de onda que el ojo humano no puede ver,
              como el infrarrojo y el ultravioleta. Los sensores
              multiespectrales dividen el espectro en varias bandas específicas,
              cada una de las cuales proporciona información diferente sobre los
              objetos en la imagen.
            </p>
            <h3>Proceso básico:</h3>
            <ol>
              <li>
                <h4>Captura de luz reflejada o emitida:</h4>
                <p className='text-just'>
                  Cuando la luz del sol u otra fuente de energía interactúa con
                  los objetos en la Tierra, los materiales reflejan, absorben o
                  emiten luz en diferentes longitudes de onda. Por ejemplo, una
                  planta saludable reflejará mucho más en la banda de infrarrojo
                  cercano (NIR) que en la banda roja visible.
                </p>
                <p className='text-just'>
                  Los sensores multiespectrales capturan estas variaciones de
                  luz en bandas específicas del espectro.
                </p>
              </li>

              <li>
                <h4>División en bandas:</h4>
                <p className='text-just'>
                  Las imágenes multiespectrales se capturan usando sensores
                  especializados que dividen el espectro electromagnético en
                  distintas bandas de frecuencias. Una imagen multiespectral
                  típica puede tener de 3 a 10 bandas, dependiendo del propósito
                  y el sensor utilizado.
                </p>
              </li>

              <li>
                <h4>Creación de las imágenes:</h4>
                <p className='text-just'>
                  Cada banda se captura como una imagen en blanco y negro, donde
                  las intensidades varían según la cantidad de luz reflejada en
                  esa longitud de onda específica. Al combinar varias bandas, se
                  pueden generar imágenes multiespectrales que representan una
                  combinación de los datos.
                </p>
                <p className='text-just'>
                  Combinación de bandas: Las imágenes multiespectrales a menudo
                  se representan como "combinaciones falsas de color", donde se
                  asignan colores visibles a bandas que no son visibles para el
                  ojo humano. Esto permite resaltar características específicas,
                  como la vegetación o la humedad en el suelo.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
