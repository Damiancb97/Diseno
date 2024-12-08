document.addEventListener("DOMContentLoaded", function () {
    const orderBy = document.getElementById("order_by");
    const chevronDown = document.getElementById("chevrondown");
    const chevronUp = document.getElementById("chevronup");
    const upForm = document.getElementById("upform");

    orderBy.addEventListener('click', () => {
        if (upForm.style.display === "inline") {
            // Si el formulario está visible, lo ocultamos
            chevronDown.style.display = "inline";
            chevronUp.style.display = "none";
            upForm.style.display = "none";
        } else {
            // Si el formulario está oculto, lo mostramos
            chevronDown.style.display = "none";
            chevronUp.style.display = "inline";
            upForm.style.display = "inline";
        }
    });
});

