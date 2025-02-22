// formulario de contacto
// Función para enviar el formulario
function handleFormSubmit() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí puedes enviar los datos a un servidor o mostrar un mensaje de éxito
    console.log({ nombre, email, telefono, mensaje });
    alert('Mensaje enviado con éxito');
}

//Filtrar proyectos

document.addEventListener('DOMContentLoaded', function () {
    // Filtrado de proyectos
    document.getElementById('filterForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtén los valores de los filtros
        const distrito = document.getElementById('filterDistrito').value.toLowerCase();
        const lugar = document.getElementById('filterLugar').value.toLowerCase();
        const cuota = parseFloat(document.getElementById('filterCuota').value) || Infinity;
        const precio = parseFloat(document.getElementById('filterPrecio').value) || Infinity;

        // Selecciona todos los proyectos
        const proyectos = document.querySelectorAll('.projects-section .col');

        proyectos.forEach(proyecto => {
            // Obtén los valores de los atributos de datos
            const proyectoDistrito = proyecto.getAttribute('data-distrito').toLowerCase();
            const proyectoLugar = proyecto.getAttribute('data-lugar').toLowerCase();
            const proyectoCuota = parseFloat(proyecto.getAttribute('data-cuota'));
            const proyectoPrecio = parseFloat(proyecto.getAttribute('data-precio'));

            // Aplica los filtros
            const coincideDistrito = distrito === 'all' || proyectoDistrito === distrito;
            const coincideLugar = lugar === 'all' || proyectoLugar === lugar;
            const coincideCuota = proyectoCuota <= cuota;
            const coincidePrecio = proyectoPrecio <= precio;

            // Muestra u oculta el proyecto según los filtros
            if (coincideDistrito && coincideLugar && coincideCuota && coincidePrecio) {
                proyecto.style.display = 'block';
            } else {
                proyecto.style.display = 'none';
            }
        });
    });

    // Reiniciar filtros
    document.getElementById('resetFilters').addEventListener('click', function () {
        // Restablece los valores de los filtros
        document.getElementById('filterDistrito').value = 'all';
        document.getElementById('filterLugar').value = 'all';
        document.getElementById('filterCuota').value = '';
        document.getElementById('filterPrecio').value = '';

        // Muestra todos los proyectos
        const proyectos = document.querySelectorAll('.projects-section .col');
        proyectos.forEach(proyecto => {
            proyecto.style.display = 'block';
        });
    });
});