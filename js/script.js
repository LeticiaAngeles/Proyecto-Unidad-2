document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstName');

    // Guardar el valor del input en localStorage al cambiar
    if (firstNameInput) {
        firstNameInput.addEventListener('input', function() {
            localStorage.setItem('firstName', firstNameInput.value);
        });
    }
});
