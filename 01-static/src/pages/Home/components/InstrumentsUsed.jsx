import React from 'react'

export const InstrumentsUsed = () => {
  return (
    <>
    <section className="animate__animated animate__headShake">
        <h2>Instrumentos utilizados para capturar imágenes multiespectrales</h2>
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
            <div className="instrument-img">
              <img src="" alt="" />
            </div>
          </div>
          <div className="sections-card">
            <div>
              <h3>Cámaras multiespectrales</h3>
              <p>
                Las cámaras multiespectrales son el principal instrumento
                utilizado para capturar imágenes en múltiples bandas del
                espectro electromagnético. A diferencia de las cámaras
                tradicionales, que solo capturan luz visible, estas cámaras
                pueden capturar imágenes en bandas específicas fuera del
                espectro visible, como el infrarrojo y el ultravioleta.
              </p>
              <div className="instrument-img">
                <img
                  src="https://www.iberoptics.com/c/408-categoria_general/camara-multiespectral-hiperespectral-vnir400-1000nm.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3>Drones (Vehículos Aéreos No Tripulados - UAVs)</h3>
              <p>
                Los drones equipados con cámaras multiespectrales son una
                solución flexible y asequible para aplicaciones agrícolas,
                ambientales y de investigación. Gracias a su capacidad de volar
                a baja altitud, proporcionan imágenes de alta resolución en
                tiempo real.
              </p>
              <div className="instrument-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYa7OTlJd7MhxUD8Gym5Q-jVW1PN0heBeP7rLuVzd92FKQQu5fDHkq3K1zZjP24nYKFMQ&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3>Satélites equipados con sensores multiespectrales</h3>
              <p>
                Los satélites son una de las plataformas más comunes para la
                captura de imágenes multiespectrales. Estos sensores capturan
                imágenes a gran escala y en varias bandas del espectro.
              </p>
              <div className="instrument-img">
                <img
                  src="https://www.cartomex.com/wp-content/uploads/2015/11/worldview-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3>Escáneres hiperespectrales</h3>
              <p>
                Aunque más avanzados y generalmente asociados a imágenes
                hiperespectrales (donde se capturan muchas más bandas que en las
                multiespectrales), los escáneres hiperespectrales a menudo
                también son utilizados en conjunto con cámaras multiespectrales
                para obtener información más detallada de un objeto o área.
              </p>
              <div className="instrument-img">
                <img
                  src="https://mesurex.com/wp-content/uploads/2018/07/Productos-Inno-Spec-Visualize-Invisibility.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3>Sensores montados en aviones</h3>
              <p>
                Además de los drones y satélites, se utilizan aviones equipados
                con sensores multiespectrales para capturar datos desde el aire
                en misiones de investigación científica, control de incendios
                forestales y monitoreo ambiental.
              </p>
              <div className="instrument-img">
                <img
                  src="https://actualidadaeroespacial.com/wp-content/uploads/2020/03/GA-AS-050320.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3>Plataformas terrestres con sensores fijos</h3>
              <p>
                Para estudios específicos, como en invernaderos o laboratorios
                de investigación agrícola, los sensores multiespectrales pueden
                montarse en plataformas terrestres fijas. Estos sistemas
                permiten monitorear cultivos o superficies durante largos
                periodos de tiempo.
              </p>
              <div className="instrument-img">
                <img
                  src="https://grupoacre.es/wp-content/uploads/sites/3/2024/05/sentera-6x-sensor-dovetail-astro-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3> Filtros ópticos y lentes especializados</h3>
              <p>
                Algunos sistemas de captura multiespectral usan filtros ópticos
                o lentes especializados para seleccionar y separar las
                diferentes longitudes de onda de la luz antes de que lleguen al
                sensor de imagen. Estos filtros permiten que solo ciertas bandas
                pasen, y cada una es capturada por separado.
              </p>
              <div className="instrument-img">
                <img
                  src="https://www.iberoptics.com/5837-large_default/camara-multiespectral-vis-nir.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
