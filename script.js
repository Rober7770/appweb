// Muestra una confirmacion cuando se envia el formulario.
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "¡Gracias, " + nombre + "! Tu formulario se reviso correctamente.";
    alert("Formulario enviado correctamente. ¡Gracias por participar!");

    formulario.reset();
});
