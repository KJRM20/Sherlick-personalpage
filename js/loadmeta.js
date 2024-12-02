document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#blog-entries .card-container');

    // Cargar metadatos de las entradas
    fetch('entradas/entradas.json')
        .then(response => response.json())
        .then(entradas => {
            container.innerHTML = "";
            entradas.forEach(entrada => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <img src="${entrada.imagen}" alt="${entrada.titulo}">
                    <h3>${entrada.titulo}</h3>
                    <p>${entrada.resumen}</p>
                    <a href="${entrada.link}">Leer más</a>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error cargando las entradas del blog:', error));
});
