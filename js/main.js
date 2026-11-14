
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#formulario-opinion");

    if (!formulario) return;

    const nombre = document.querySelector("#nombre");
    const lugar = document.querySelector("#lugar");
    const puntuacion = document.querySelector("#puntuacion");
    const descripcion = document.querySelector("#descripcion");
    const mensaje = document.querySelector("#mensaje-formulario");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const campos = [nombre, lugar, puntuacion, descripcion];

        campos.forEach((campo) => {
            campo.classList.remove("is-invalid");
            campo.removeAttribute("aria-invalid");
        });

        const errores = [];

        if (nombre.value.trim() === "") errores.push(nombre);
        if (lugar.value === "") errores.push(lugar);
        if (puntuacion.value === "") errores.push(puntuacion);
        if (descripcion.value.trim() === "") errores.push(descripcion);

        if (errores.length > 0) {
            errores.forEach((campo) => {
                campo.classList.add("is-invalid");
                campo.setAttribute("aria-invalid", "true");
            });

            mensaje.className = "alert alert-danger mt-3";
            mensaje.textContent =
                "Por favor, completá todos los campos antes de enviar tu opinión.";

            errores[0].focus();
            return;
        }

        mensaje.className = "alert alert-success mt-3";
        mensaje.textContent =
            "¡Gracias por compartir tu experiencia! Tu opinión fue validada correctamente.";

        formulario.reset();
    });
});
