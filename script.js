const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');
const message = document.getElementById('searchMessage');

function runSearch() {
  const value = input.value.trim();
  message.textContent = value
    ? `Buscando opciones para “${value}”… La conexión con fuentes de producto se incorporará durante el desarrollo.`
    : 'Introduce un producto, una marca o lo que necesitas encontrar.';
}

button.addEventListener('click', runSearch);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') runSearch();
});