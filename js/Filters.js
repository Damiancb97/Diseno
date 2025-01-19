document.addEventListener("DOMContentLoaded", function () {
    const filters = document.getElementById("filters");
    const showFilter = document.getElementById("show_filter");
    const hiddenFilter = document.getElementById("hidden_filter");

    // Mostrar los filtros
    showFilter.addEventListener("click", function () {
        filters.style.display = "block"; // Muestra los filtros
        showFilter.style.display = "none"; // Oculta "Mostrar filtros"
        hiddenFilter.style.display = "inline"; // Muestra "Ocultar filtros"
    });

    // Ocultar los filtros
    hiddenFilter.addEventListener("click", function () {
        filters.style.display = "none"; // Oculta los filtros
        hiddenFilter.style.display = "none"; // Oculta "Ocultar filtros"
        showFilter.style.display = "inline"; // Muestra "Mostrar filtros"
    });
});
