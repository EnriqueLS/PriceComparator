const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');
const message = document.getElementById('searchMessage');

function runDemoSearch() {
  const value = input.value.trim();
  message.textContent = value
    ? `Demo search for “${value}” — live product data will be connected during development.`
    : 'Enter a product name to try the search concept.';
}

button.addEventListener('click', runDemoSearch);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') runDemoSearch();
});