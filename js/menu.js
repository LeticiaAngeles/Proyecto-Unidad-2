document.addEventListener('DOMContentLoaded', function() {
    const nombreDisplay = document.getElementById('nombre');

    // Obtener el valor desde localStorage y mostrarlo en la página
    const savedName = localStorage.getItem('firstName');
    if (nombreDisplay && savedName) {
        nombreDisplay.textContent = savedName;
    }
});
