document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const firstNameInput = document.getElementById('firstName');
    const nombreDisplay = document.getElementById('nombre');

    // Cargar nombre guardado si la opción "Recordar Nombre" está activada
    const savedName = localStorage.getItem('firstName');
    if (localStorage.getItem('rememberMe') === 'true' && savedName) {
        firstNameInput.value = savedName;
        rememberMeCheckbox.checked = true;
        if (nombreDisplay) {
            nombreDisplay.textContent = savedName; // Muestra el nombre en la página
        }
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

    // Asignar la función handleFormSubmit al evento de envío del formulario
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }

    // Mostrar el nombre guardado en otra parte de la página, si está disponible
    const userName = localStorage.getItem('firstName');
    if (nombreDisplay && userName) {
        nombreDisplay.textContent = userName;
    }
});
