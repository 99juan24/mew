// Obtener elementos del DOM
const codeInput = document.getElementById('codeInput');
const submitCode = document.getElementById('submitCode');
const errorMessage = document.getElementById('errorMessage');
const codeContainer = document.getElementById('codeContainer');
const buttonsContainer = document.getElementById('buttonsContainer');
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalText = document.getElementById('modalText');

// Código correcto
const correctCode = "30242806";

// Función para validar el código
submitCode.addEventListener('click', () => {
    const enteredCode = codeInput.value.trim();

    if (enteredCode === correctCode) {
        // Código correcto: mostrar botones y ocultar el campo de código
        codeContainer.classList.add('hidden');
        buttonsContainer.classList.remove('hidden');
        errorMessage.textContent = ""; // Limpiar mensaje de error
    } else {
        // Código incorrecto: mostrar mensaje de error
        errorMessage.textContent = "Código incorrecto. Intenta de nuevo.";
    }
});

// Función para mover el botón "Sí"
btnSi.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - btnSi.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - btnSi.offsetHeight);
    btnSi.style.position = 'absolute';
    btnSi.style.left = `${randomX}px`;
    btnSi.style.top = `${randomY}px`;
});

// Función para mostrar la ventana emergente al hacer clic en "No"
btnNo.addEventListener('click', () => {
    modal.style.display = 'flex';
    adjustModalSize(); // Ajustar el tamaño del modal según el texto
});

// Función para cerrar la ventana emergente
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar la ventana emergente si se hace clic fuera de ella
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para ajustar el tamaño del modal según el texto
function adjustModalSize() {
    const modalContent = document.querySelector('.modal-content');
    const textWidth = modalText.offsetWidth;
    const textHeight = modalText.offsetHeight;

    // Ajustar el tamaño del círculo según el texto
    const diameter = Math.max(textWidth, textHeight) + 80; // Agregar un margen
    modalContent.style.width = `${diameter}px`;
    modalContent.style.height = `${diameter}px`;
}