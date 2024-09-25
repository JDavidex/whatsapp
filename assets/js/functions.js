const toggleLink = document.querySelector(".menuIcons.user a");
const styleLink = document.querySelector('link[rel="stylesheet"]');

// Variable para controlar el modo oscuro
let isDarkMode = false;

toggleLink.addEventListener("click", (event) => {
  event.preventDefault(); // Evita la acción por defecto del enlace

  // Alterna entre los archivos de estilo
  if (isDarkMode) {
    styleLink.href = "assets/css/style.css"; // Estilo claro
  } else {
    styleLink.href = "assets/css/dark.css"; // Estilo oscuro
  }

  // Cambia el estado del modo
  isDarkMode = !isDarkMode;
});

// Función para cambiar el título según el tamaño de la ventana

// function updateTitle() {
//   const title = document.querySelector(".title");
//   if (window.innerWidth <= 480) {
//     title.textContent = "WhatsApp";
//   } else {
//     title.textContent = "Chats";
//   }
// }

function updateTitle() {
  const titleElement = document.querySelector(".title");
  titleElement.textContent = window.innerWidth <= 480 ? "WhatsApp" : "Chats"; // Cambia el texto según el ancho
}

// Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener("load", updateTitle);
window.addEventListener("resize", updateTitle);
