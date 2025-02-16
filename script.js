document.getElementById('streaming').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const imageUrl = selectedOption.getAttribute('data-img');
    const servicioImagen = document.getElementById('servicioImagen');

    if (imageUrl) {
        servicioImagen.src = imageUrl;
        servicioImagen.classList.remove('hidden');
    } else {
        servicioImagen.classList.add('hidden');
    }
});

document.getElementById('streamingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const idCliente = document.getElementById('idCliente').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const servicio = document.getElementById('streaming').value;
    const imagen = document.getElementById('servicioImagen').src;

    if (!servicio) {
        alert("Por favor, selecciona un servicio de streaming.");
        return;
    }

    let precioBase = 0, costoAdicional = 0;
    switch (servicio) {
        case 'Netflix': precioBase = 9; costoAdicional = 2; break;
        case 'Disney': precioBase = 6; costoAdicional = 3; break;
        case 'Max': precioBase = 7; costoAdicional = 3; break;
        case 'Primevideo': precioBase = 12; costoAdicional = 5; break;
    }

    const impuesto = 0.15 * (precioBase + costoAdicional);
    const total = precioBase + costoAdicional + impuesto;
    const params = new URLSearchParams({
        idCliente: idCliente,
        nombre: nombre,
        edad: edad,
        telefono: telefono,
        correo: correo,
        servicio: servicio,
        precioBase: precioBase,
        costoAdicional: costoAdicional,
        impuesto: impuesto.toFixed(2),
        total: total.toFixed(2),
        imagen: imagen
    });
    window.location.href = `factura.html?${params.toString()}`;
});