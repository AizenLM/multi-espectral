import React from "react";
import { Link } from "react-router-dom";
import arrowSvg from "../assets/arrow_upward.svg";

function InformationEspectral() {
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

      <section className="animate__animated animate__headShake">
        <h2> ¿Cómo funcionan las imágenes multiespectrales?</h2>
        <div className="section-content">
          <div className="spectral-image">
            <img
              src="https://adenilsongiovanini.com.br/blog/wp-content/uploads/2021/07/resolucao-espectral-de-satelites.jpg"
              alt="Imagen que muestra cómo funcionan las cámaras multiespectrales"
            />
          </div>
          <div>
            <p>
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
                <p>
                  Cuando la luz del sol u otra fuente de energía interactúa con
                  los objetos en la Tierra, los materiales reflejan, absorben o
                  emiten luz en diferentes longitudes de onda. Por ejemplo, una
                  planta saludable reflejará mucho más en la banda de infrarrojo
                  cercano (NIR) que en la banda roja visible.
                </p>
                <p>
                  Los sensores multiespectrales capturan estas variaciones de
                  luz en bandas específicas del espectro.
                </p>
              </li>

              <li>
                <h4>División en bandas:</h4>
                <p>
                  Las imágenes multiespectrales se capturan usando sensores
                  especializados que dividen el espectro electromagnético en
                  distintas bandas de frecuencias. Una imagen multiespectral
                  típica puede tener de 3 a 10 bandas, dependiendo del propósito
                  y el sensor utilizado.
                </p>
              </li>

              <li>
                <h4>Creación de las imágenes:</h4>
                <p>
                  Cada banda se captura como una imagen en blanco y negro, donde
                  las intensidades varían según la cantidad de luz reflejada en
                  esa longitud de onda específica. Al combinar varias bandas, se
                  pueden generar imágenes multiespectrales que representan una
                  combinación de los datos.
                </p>
                <p>
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
                  src="https://www.researchgate.net/publication/344499765/figure/fig3/AS:943727254196231@1602013519366/Figura-10-Dron-multirotor-con-camara-multiespectral-acoplada.ppm"
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
      <div className="up-button">
        <a href="#Que-son">
          <i className="material-icons">
          arrow_upward
            </i>
        </a>
      </div>
      <section className="animate__animated animate__headShake">
        <h2>Aplicaciones de las Imágenes Multiespectrales</h2>
        <div className="section-content">
          <ul>
            <li>
              <strong>Agricultura de precisión:</strong> Mejora en la gestión de
              cultivos mediante el monitoreo de la salud de la vegetación.
            </li>
            <li>
              <strong>Gestión de recursos hídricos:</strong> Evaluación de la
              calidad del agua y detección de algas.
            </li>
            <li>
              <strong>Monitoreo ambiental:</strong> Detección de cambios en el
              uso del suelo y conservación de ecosistemas.
            </li>
            <li>
              <strong>Geología y minería:</strong> Exploración y análisis de
              minerales y su distribución en el terreno.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>¿Qué es la Detección de Bandas Multiespectrales?</h2>
            <p>
                La detección de bandas multiespectrales implica capturar y analizar diferentes partes del espectro electromagnético utilizando sensores especializados. Estos sensores dividen el espectro en varias bandas, cada una sensible a una longitud de onda específica. Este proceso es esencial en aplicaciones como la teledetección, la agricultura y los estudios medioambientales.
            </p>
            <div>
            <h2>Proceso de Detección de Bandas Multiespectrales</h2>

            <article>
                <h3>1. Captura de Datos Multiespectrales</h3>
                <p>
                    La detección comienza con la captura de imágenes multiespectrales utilizando cámaras o sensores en satélites, drones o dispositivos terrestres. Estos sensores están diseñados para captar varias bandas del espectro electromagnético, desde el ultravioleta hasta el infrarrojo cercano (NIR). Cada banda capturada ofrece información única, basada en la interacción de la luz con los objetos en la imagen.
                </p>
            </article>

            <article>
                <h3>2. Preprocesamiento de Datos</h3>
                <p>
                    Antes de analizar las bandas, los datos crudos deben pasar por un preprocesamiento para corregir posibles distorsiones:
                </p>
                <ul>
                    <li><strong>Corrección radiométrica</strong>: Ajusta las diferencias en la sensibilidad del sensor y las condiciones de iluminación, normalizando los valores de los píxeles.</li>
                    <li><strong>Corrección atmosférica</strong>: Elimina las distorsiones causadas por la atmósfera, como la dispersión de la luz o la absorción, para asegurar que los datos reflejen con precisión el entorno observado.</li>
                </ul>
            </article>

            <article>
                <h3>3. Extracción de Bandas Espectrales</h3>
                <p>
                    Las imágenes multiespectrales contienen múltiples bandas. El siguiente paso es separar estas bandas para su análisis individual. Las bandas comunes incluyen:
                </p>
                <ul>
                    <li><strong>Banda Roja (Red)</strong>: Captura la luz visible en longitudes de onda específicas y se utiliza comúnmente en combinación con otras bandas.</li>
                    <li><strong>Infrarrojo Cercano (NIR)</strong>: Captura longitudes de onda fuera del espectro visible y es útil para estudiar la vegetación.</li>
                    <li><strong>Verde (Green)</strong>: Utilizada para analizar el contenido de clorofila en las plantas.</li>
                </ul>
            </article>

            <article>
                <h3>4. Cálculo de Índices Espectrales</h3>
                <p>
                    A partir de las bandas separadas, se pueden calcular índices espectrales que permiten interpretar mejor los datos. Los índices más comunes son:
                </p>
                <ul>
                    <li><strong>NDVI (Índice de Vegetación de Diferencia Normalizada)</strong>: Utiliza las bandas roja e infrarroja cercana para determinar la salud de la vegetación.</li>
                    <li><strong>NDWI (Índice de Diferencia de Agua)</strong>: Ayuda a detectar cuerpos de agua mediante la combinación de bandas visibles e infrarrojas.</li>
                    <li><strong>SAVI (Índice de Vegetación Ajustado al Suelo)</strong>: Mejora la interpretación de vegetación en áreas donde hay presencia de suelo descubierto.</li>
                </ul>
                <p>Fórmula básica del NDVI:</p>
                <p><code>NDVI = (NIR - Red) / (NIR + Red)</code></p>
            </article>

            <article>
                <h3>5. Clasificación de Datos</h3>
                <p>
                    Una vez extraídas las características de las bandas, se pueden clasificar los píxeles según sus firmas espectrales:
                </p>
                <ul>
                    <li><strong>Clasificación Supervisada</strong>: Se entrena un algoritmo utilizando datos conocidos (etiquetados) para identificar categorías como vegetación, agua o edificaciones.</li>
                    <li><strong>Clasificación No Supervisada</strong>: Los algoritmos, como el <strong>K-means</strong>, agrupan automáticamente píxeles con propiedades espectrales similares sin intervención humana.</li>
                </ul>
            </article>

            <article>
                <h3>6. Visualización y Análisis</h3>
                <p>
                    Finalmente, las bandas se combinan para generar imágenes compuestas que destacan características específicas del área de estudio. La fusión de bandas visibles e infrarrojas, por ejemplo, puede revelar detalles ocultos sobre la salud de los cultivos, cuerpos de agua o estructuras.
                </p>
            </article>

        </div>

        <div>
            <h2>Algoritmos Utilizados en la Detección de Bandas Multiespectrales</h2>
            <p>La detección de bandas multiespectrales y el análisis subsiguiente emplean varios algoritmos matemáticos y de machine learning, como:</p>
            <ul>
                <li><strong>K-means</strong>: Algoritmo de clasificación no supervisada que agrupa píxeles en función de sus firmas espectrales.</li>
                <li><strong>Máquinas de Soporte Vectorial (SVM)</strong>: Utilizadas para clasificación supervisada, especialmente útil en la detección de vegetación, agua y edificaciones.</li>
                <li><strong>Redes Neuronales Artificiales</strong>: Se entrenan para detectar patrones complejos en las bandas espectrales.</li>
            </ul>
      </div>
      </section>
      <section>
  <h2>¿Dónde conseguir imágenes multiespectrales?</h2>
  <div className="image-source-container">
    <a href="https://earthdata.nasa.gov/" target="_blank" rel="noopener noreferrer" className="source-box">
      <h3>NASA EarthData</h3>
      <img src="https://oasishub.co/uploads/group/2017-07-27-085017.923724logoNASA.jpg" alt="img of nasa earth data"></img>
      <p>
        Accede a una amplia gama de datos satelitales y descarga imágenes multiespectrales de diversas misiones.
      </p>
      <span>Visitar</span>
    </a>
    <a href="https://earthexplorer.usgs.gov/" target="_blank" rel="noopener noreferrer" className="source-box">
      <h3>USGS Earth Explorer</h3>
      <img src="https://lpdaac.usgs.gov/static/USGS_whitelogo.png" alt="logo USGS"></img>
      <p>
        Herramienta integral para acceder a imágenes satelitales multiespectrales de múltiples fuentes, incluyendo Landsat.
      </p>
      <span>Visitar</span>
    </a>
    <a href="https://www.sentinel-hub.com/" target="_blank" rel="noopener noreferrer" className="source-box">
      <h3>Sentinel Hub</h3>
      <img src="https://i.ytimg.com/vi/uBinB7CXbzg/maxresdefault.jpg" alt="sentinel hub logo" />
      <p>
        Proporciona acceso a imágenes de satélites Sentinel, con un servicio de visualización para datos multiespectrales.
      </p>
      <span>Visitar</span>
    </a>
    <a href="https://www.copernicus.eu/en" target="_blank" rel="noopener noreferrer" className="source-box">
    <h3>Copernicus</h3>
      <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/07/Copernicus-Eyes-on-Earth.jpg"></img>
      
      <p>
        Programa de la Unión Europea que proporciona acceso a una amplia gama de datos de observación de la Tierra, incluyendo imágenes multiespectrales de los satélites Sentinel.
      </p>
      <span>Visitar</span>
    </a>
  </div>
</section>
    </>
  );
}

export default InformationEspectral;
