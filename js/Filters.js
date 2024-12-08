document.addEventListener("DOMContentLoaded", function () {
    const filters = document.getElementById("filters");
    const showFilter = document.getElementById("show_filter");
    const hiddenFilter = document.getElementById("hidden_filter");
    const section = document.querySelector(".section");

    showFilter.addEventListener("click", function () {
        filters.classList.remove("hidden"); // Muestra los filtros
        showFilter.style.display = "none"; // Oculta "Mostrar filtros"
        hiddenFilter.style.display = "inline"; // Muestra "Ocultar filtros"
    });

    hiddenFilter.addEventListener("click", function () {
        filters.classList.add("hidden"); // Oculta los filtros
        hiddenFilter.style.display = "none"; // Oculta "Ocultar filtros"
        showFilter.style.display = "inline"; // Muestra "Mostrar filtros"
    });
});
