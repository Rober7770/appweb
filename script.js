const quiz = document.getElementById("quiz");
quiz.addEventListener("submit", function(e) {
 e.preventDefault();
 const correctas = {q1:"b", q2:"a", q3:"c"};
 let puntos = 0;
 for (const pregunta in correctas) {
   const seleccion = quiz.querySelector('input[name="' + pregunta + '"]:checked');
   if (seleccion && seleccion.value === correctas[pregunta]) puntos++;
 }
 document.getElementById("resultado").textContent = "Obtuviste " + puntos + " de 3 respuestas correctas.";
 alert("Evaluación terminada: " + puntos + " de 3 respuestas correctas.");
});
const formContacto = document.getElementById("formContacto");
formContacto.addEventListener("submit", function(e) {
 e.preventDefault();
 const nombre = document.getElementById("nombre").value.trim();
 const tema = document.getElementById("interes").value;
 alert("¡Gracias, " + nombre + "! Tu tema de interés es: " + tema + ".");
 document.getElementById("aviso").textContent = "¡Gracias por compartir tu interés!";
 formContacto.reset();
});
