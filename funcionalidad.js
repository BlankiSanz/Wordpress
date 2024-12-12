document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Verificar si todos los campos están llenos
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, rellene todos los campos antes de enviar.');
  } else {
    alert('Sus datos han sido enviados con éxito.');
    // Aquí puedes agregar el código para enviar el formulario si es necesario
  }
});


