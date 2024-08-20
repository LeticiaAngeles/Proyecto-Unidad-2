document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        const nombreElemento = document.getElementById('nombre');
        if (nombreElemento) {
            nombreElemento.textContent = userName;
        }
    }

    // Obtener el botón con id 'autoridades'
    let botonAutoridades = document.getElementById('autoridades');

    // Crear el popup y el overlay si el botón existe
    if (botonAutoridades) {
        let popup = document.createElement('div');
        popup.id = 'popup';
        popup.innerHTML = `
            <p>En breve recibirás ayuda 🫶</p>
            <button id="cerrar-popup">Cerrar</button>
        `;

        let overlay = document.createElement('div');
        overlay.id = 'overlay';

        // Añadir el popup y el overlay al documento
        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        // Mostrar el popup al hacer clic en el botón
        botonAutoridades.addEventListener('click', function() {
            overlay.style.display = 'block';
            popup.style.display = 'block';
        });

        // Ocultar el popup al hacer clic en el botón de cerrar
        let botonCerrarPopup = document.getElementById('cerrar-popup');
        botonCerrarPopup.addEventListener('click', function() {
            overlay.style.display = 'none';
            popup.style.display = 'none';
        });
    }

    // Inicializar el convertidor si el botón existe
    let botonConvertir = document.getElementById('boton-convertir');

    if (botonConvertir) {
        botonConvertir.addEventListener('click', function() {
            let texto = document.getElementById('entrada-texto').value;

            if (texto === '') {
                alert('Por favor, llene el cuadro de texto antes de convertir.');
            } else {
                // Mapa de caracteres a código Morse
                let letras = {
                    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
                    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
                    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
                    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
                    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
                    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
                    '9': '----.', '0': '-----', ' ': '/'
                };

                // Convertir texto a código Morse
                let resultado = '';
                for (let i = 0; i < texto.length; i++) {  // Aquí usamos 'texto' en lugar de 'inputText'
                    let a = texto[i].toUpperCase();
                    if (letras[a]) {
                        resultado += letras[a] + ' ';
                    }
                }

                // Mostrar el resultado en el cuadro de texto
                document.getElementById('texto-resultado').value = resultado;
            }
        });
    }
});
