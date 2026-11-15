
document.addEventListener("DOMContentLoaded", function () {

    // ------ VALIDACIÓN DEL FORMULARIO ------

    const formulario = document.getElementById("formulario-opinion");

    if (formulario) {

        const nombre = document.getElementById("nombre");
        const lugar = document.getElementById("lugar");
        const puntuacion = document.getElementById("puntuacion");
        const descripcion = document.getElementById("descripcion");
        const mensaje = document.getElementById("mensaje-formulario");

        // Comprobar que existan todos los elementos del formulario.
        if (!nombre || !lugar || !puntuacion || !descripcion || !mensaje) {

            console.error("Falta algún elemento del formulario en el HTML.");

        } else {

            formulario.addEventListener("submit", function (evento) {

                // Evitar que la página se recargue.
                evento.preventDefault();

                // Limpiar los errores anteriores.
                const campos = [nombre, lugar, puntuacion, descripcion];

                campos.forEach(function (campo) {
                    campo.classList.remove("is-invalid");
                });

                mensaje.textContent = "";
                mensaje.className = "";

                // Revisar los campos vacíos.
                let hayErrores = false;

                campos.forEach(function (campo) {

                    if (campo.value.trim() === "") {
                        campo.classList.add("is-invalid");
                        hayErrores = true;
                    }

                });

                // Si hay campos vacíos, mostrar error.
                if (hayErrores) {

                    mensaje.textContent =
                        "Por favor, completá todos los campos antes de enviar tu opinión.";

                    mensaje.className = "alert alert-danger mt-3";

                    return;
                }

                // Si todo está completo, mostrar éxito.
                mensaje.textContent =
                    "¡Gracias por compartir tu experiencia! Tu opinión fue validada correctamente.";

                mensaje.className = "alert alert-success mt-3";

                // Limpiar el formulario.
                formulario.reset();

            });
        }
    }
// Cambia de modo oscuro a modo claro y viceversa
const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  const oscuro = document.body.classList.contains("oscuro");
  boton.textContent = oscuro ? "☀️ Modo claro" : "🌕 Modo oscuro";
});
});
