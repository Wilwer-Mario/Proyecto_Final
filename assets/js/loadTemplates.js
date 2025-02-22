// Función para cargar el encabezado
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// Función para cargar el pie de página
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Cargar el encabezado y pie de página al cargar la página
window.onload = function () {
    loadHeader();
    loadFooter();
};