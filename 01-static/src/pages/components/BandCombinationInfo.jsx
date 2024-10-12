import React from "react";

function BandCombinationInfo() {
    return (
        <section>
            <h2>¿Cómo Funciona la Combinación de Bandas en Imágenes Multiespectrales?</h2>
            <p>
                La <strong>combinación de bandas</strong> en imágenes multiespectrales es una técnica que permite unir información capturada en diferentes longitudes de onda de luz (o bandas) para obtener una imagen más completa y detallada de lo que nuestros ojos pueden ver.
            </p>

            <h3>¿Qué son las bandas?</h3>
            <p>
                Una banda es básicamente una "capa" de una imagen que representa cómo un objeto refleja la luz en una parte específica del espectro electromagnético. Estas bandas pueden estar en:
            </p>
            <ul>
                <li>Luz visible (los colores que vemos: rojo, verde y azul).</li>
                <li>Infrarrojo (que nuestros ojos no ven pero que detecta el calor).</li>
                <li>Otras partes del espectro que captan detalles específicos, como la humedad del suelo o la salud de las plantas.</li>
            </ul>

            <h3>¿Cómo funciona la combinación de bandas?</h3>
            <p>
                Cuando combinamos bandas de una imagen multiespectral, lo que hacemos es unir estas diferentes capas para crear una sola imagen que tenga más información que cualquiera de las capas por sí sola. Por ejemplo:
            </p>
            <ul>
                <li>La banda roja podría mostrar la vegetación.</li>
                <li>La banda infrarroja podría resaltar diferencias en la temperatura.</li>
                <li>Al combinarlas, puedes ver tanto el paisaje visible como información invisible sobre la salud de las plantas o el calor que emiten.</li>
            </ul>

            <h3>¿Por qué es útil?</h3>
            <p>
                La combinación de bandas es muy útil en campos como la agricultura, la ecología y la ciencia ambiental. Ayuda a monitorear la salud de los cultivos, detectar problemas en el suelo, y observar cambios en el ambiente que no son visibles a simple vista.
            </p>

            <h3>Ejemplo sencillo</h3>
            <p>
                Imagina que estás mirando una fotografía de un bosque. Solo puedes ver los árboles y el suelo (luz visible). Pero si combinas esa imagen con otras bandas, podrías ver qué áreas del bosque están más saludables, cuáles están secas o incluso detectar cuerpos de agua ocultos bajo la vegetación.
            </p>

            <p>
                Esta técnica es fundamental en imágenes multiespectrales y se usa con frecuencia en satélites, drones, y otras herramientas de monitoreo.
            </p>
        </section>
    );
}

export default BandCombinationInfo;
