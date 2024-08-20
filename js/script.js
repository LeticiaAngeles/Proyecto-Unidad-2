document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('userName');

    // Guardar el nombre en localStorage cuando se modifique el valor
    if (firstNameInput) {
        firstNameInput.addEventListener('input', function() {
            localStorage.setItem('userName', firstNameInput.value);
        });
    }
});
