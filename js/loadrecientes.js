document.addEventListener("DOMContentLoaded", () => {
    const recientesContainer = document.querySelector("#blog-recientes .card-container");

    // Ruta del archivo JSON
    const jsonURL = "entradas/entradas.json";

    fetch(jsonURL)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el JSON");
            return response.json();
        })
        .then(data => {
            if (!data.length) {
                recientesContainer.innerHTML = "<p>No hay entradas recientes disponibles.</p>";
                return;
            }

            recientesContainer.innerHTML = "";
            // Ordenar por fecha descendente
            const entradasRecientes = data
                .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                .slice(0, 3); // Tomar hasta 3 entradas

            // Crear las tarjetas para las entradas recientes
            entradasRecientes.forEach(entrada => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h3>${entrada.titulo}</h3>
                    <p>${entrada.resumen}</p>
                    <a href="${entrada.link}">Leer más</a>
                `;

                recientesContainer.appendChild(card);
            });

        })
        .catch(error => {
            console.error("Error al cargar entradas recientes:", error);
            recientesContainer.innerHTML = "<p>Ocurrió un error al cargar las entradas recientes.</p>";
        });
});
