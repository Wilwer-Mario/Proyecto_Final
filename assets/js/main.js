document.querySelector('form').addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !telefono || !mensaje) {
        e.preventDefault();
        alert('Por favor, completa todos los campos.');
    }
});