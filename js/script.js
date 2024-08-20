document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const firstNameInput = document.getElementById('firstName');

    // Cargar nombre guardado si la opción "Recordar Nombre" está activada
    if (localStorage.getItem('rememberMe') === 'true') {
        firstNameInput.value = localStorage.getItem('firstName') || '';
        rememberMeCheckbox.checked = true;
    }

    // Función para manejar el envío del formulario
    function handleFormSubmit(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('firstName', firstNameInput.value);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('firstName');
        }

        // Enviar el formulario manualmente después de procesar los datos
        window.location.href = loginForm.action; // Redirige a la página de destino
    }

});
