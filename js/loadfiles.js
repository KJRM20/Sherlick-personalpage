document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#descargables .card-container');

    // Cargar metadatos de las entradas
    fetch('descargables/descargables.json')
        .then(response => response.json())
        .then(archivos => {
            container.innerHTML = "";
            archivos.forEach(archivo => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <h3>${archivo.titulo}</h3>
                    <p>${archivo.resumen}</p>
                    <a href="${archivo.link}" donwload>Descargar</a>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error cargando los archivos de la sección descargables:', error));
});