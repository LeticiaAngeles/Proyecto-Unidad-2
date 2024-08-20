document.addEventListener("DOMContentLoaded", () => {
    // Mostrar el nombre de usuario si está almacenado
    const username = localStorage.getItem("username");
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (username && usernameDisplay) {
        usernameDisplay.textContent = `, ${username}!`;
    }

    // Crear y agregar el cursor personalizado
    const cursor = document.querySelector('.custom-cursor');

    // Actualizar la posición del cursor personalizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Cambiar color del cursor al pasar sobre elementos clicables
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('a, button')) {
            cursor.style.backgroundColor = '#000000';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.matches('a, button')) {
            cursor.style.backgroundColor = '#EB0056';
        }
    });

    // Cambiar color del cursor al hacer clic
    document.addEventListener('mousedown', () => {
        cursor.style.backgroundColor = '#000000';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.backgroundColor = '#EB0056';
    });
});
