import React from "react";

export const BandDetection = () => {
  return (
    <>
      <section className="band-detection-inf">
        <h2>¿Qué es la Detección de Bandas Multiespectrales?</h2>
        <p className='text-just'>
          La detección de bandas multiespectrales implica capturar y analizar
          diferentes partes del espectro electromagnético utilizando sensores
          especializados. Estos sensores dividen el espectro en varias bandas,
          cada una sensible a una longitud de onda específica. Este proceso es
          esencial en aplicaciones como la teledetección, la agricultura y los
          estudios medioambientales.
        </p>
        <div className="content-band-detection">
          <h2>Proceso de Detección de Bandas Multiespectrales</h2>
          <article>
            <h3>1. Captura de Datos Multiespectrales</h3>
            <p>
              La detección comienza con la captura de imágenes multiespectrales
              utilizando cámaras o sensores en satélites, drones o dispositivos
              terrestres. Estos sensores están diseñados para captar varias
              bandas del espectro electromagnético, desde el ultravioleta hasta
              el infrarrojo cercano (NIR). Cada banda capturada ofrece
              información única, basada en la interacción de la luz con los
              objetos en la imagen.
            </p>
          </article>

          <article>
            <h3>2. Preprocesamiento de Datos</h3>
            <p>
              Antes de analizar las bandas, los datos crudos deben pasar por un
              preprocesamiento para corregir posibles distorsiones:
            </p>
            <ul>
              <li>
                <strong>Corrección radiométrica</strong>: Ajusta las diferencias
                en la sensibilidad del sensor y las condiciones de iluminación,
                normalizando los valores de los píxeles.
              </li>
              <li>
                <strong>Corrección atmosférica</strong>: Elimina las
                distorsiones causadas por la atmósfera, como la dispersión de la
                luz o la absorción, para asegurar que los datos reflejen con
                precisión el entorno observado.
              </li>
            </ul>
          </article>

          <article>
            <h3>3. Extracción de Bandas Espectrales</h3>
            <p>
              Las imágenes multiespectrales contienen múltiples bandas. El
              siguiente paso es separar estas bandas para su análisis
              individual. Las bandas comunes incluyen:
            </p>
            <ul>
              <li>
                <strong>Banda Roja (Red)</strong>: Captura la luz visible en
                longitudes de onda específicas y se utiliza comúnmente en
                combinación con otras bandas.
              </li>
              <li>
                <strong>Infrarrojo Cercano (NIR)</strong>: Captura longitudes de
                onda fuera del espectro visible y es útil para estudiar la
                vegetación.
              </li>
              <li>
                <strong>Verde (Green)</strong>: Utilizada para analizar el
                contenido de clorofila en las plantas.
              </li>
            </ul>
          </article>

          <article>
            <h3>4. Cálculo de Índices Espectrales</h3>
            <p>
              A partir de las bandas separadas, se pueden calcular índices
              espectrales que permiten interpretar mejor los datos. Los índices
              más comunes son:
            </p>
            <ul>
              <li>
                <strong>
                  NDVI (Índice de Vegetación de Diferencia Normalizada)
                </strong>
                : Utiliza las bandas roja e infrarroja cercana para determinar
                la salud de la vegetación.
              </li>
              <li>
                <strong>NDWI (Índice de Diferencia de Agua)</strong>: Ayuda a
                detectar cuerpos de agua mediante la combinación de bandas
                visibles e infrarrojas.
              </li>
              <li>
                <strong>SAVI (Índice de Vegetación Ajustado al Suelo)</strong>:
                Mejora la interpretación de vegetación en áreas donde hay
                presencia de suelo descubierto.
              </li>
            </ul>
            <p>Fórmula básica del NDVI:</p>
            <p className="text-center">
              <code>NDVI = (NIR - Red) / (NIR + Red)</code>
            </p>
          </article>

          <article>
            <h3>5. Clasificación de Datos</h3>
            <p>
              Una vez extraídas las características de las bandas, se pueden
              clasificar los píxeles según sus firmas espectrales:
            </p>
            <ul>
              <li>
                <strong>Clasificación Supervisada</strong>: Se entrena un
                algoritmo utilizando datos conocidos (etiquetados) para
                identificar categorías como vegetación, agua o edificaciones.
              </li>
              <li>
                <strong>Clasificación No Supervisada</strong>: Los algoritmos,
                como el <strong>K-means</strong>, agrupan automáticamente
                píxeles con propiedades espectrales similares sin intervención
                humana.
              </li>
            </ul>
          </article>

          <article>
            <h3>6. Visualización y Análisis</h3>
            <p>
              Finalmente, las bandas se combinan para generar imágenes
              compuestas que destacan características específicas del área de
              estudio. La fusión de bandas visibles e infrarrojas, por ejemplo,
              puede revelar detalles ocultos sobre la salud de los cultivos,
              cuerpos de agua o estructuras.
            </p>
          </article>
        </div>

        <div>
          <h2>
            Algoritmos Utilizados en la Detección de Bandas Multiespectrales
          </h2>
          <p>
            La detección de bandas multiespectrales y el análisis subsiguiente
            emplean varios algoritmos matemáticos y de machine learning, como:
          </p>
          <ul>
            <li>
              <strong>K-means</strong>: Algoritmo de clasificación no
              supervisada que agrupa píxeles en función de sus firmas
              espectrales.
            </li>
            <li>
              <strong>Máquinas de Soporte Vectorial (SVM)</strong>: Utilizadas
              para clasificación supervisada, especialmente útil en la detección
              de vegetación, agua y edificaciones.
            </li>
            <li>
              <strong>Redes Neuronales Artificiales</strong>: Se entrenan para
              detectar patrones complejos en las bandas espectrales.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
