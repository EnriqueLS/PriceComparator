const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');
const message = document.getElementById('searchMessage');

// Temporary brand mark used across the demo.
document.querySelectorAll('.brand').forEach((brand) => {
  brand.innerHTML = '<img src="logo.svg" alt="Price Comparator" style="display:block;width:190px;height:auto">';
});

// Keep category cards honest while only the racket comparison is implemented.
const categoryCards = [...document.querySelectorAll('.category-card')];
const categoryImages = [
  'https://padelac.fr/wp-content/uploads/sites/54/2025/06/padel-ac-image.jpg',
  'https://www.joma-sport.com/dw/image/v2/BFRV_PRD/on/demandware.static/-/Sites-joma-masterCatalog/default/dw950807a0/images/medium/TOPEW2572OM_4.jpg?sh=900&sm=fit&sw=900',
  'https://a.allegroimg.com/original/119ddc/1d2b38a74098bec604b6fd26cb5e/Koszulka-Adidas-Padel-AeroReady-niebieska-sportowa-oddychajaca-nadruk-r-XS',
  'https://noxsport.com/cdn/shop/files/paletero-at10-xxl-bpat10xxl24-8436603198097-985705.jpg?v=1719556072&width=2000',
  'https://raqa.nl/cdn/shop/files/padel-starters-pack.jpg?v=1759213280&width=416'
];

categoryCards.forEach((card, index) => {
  const image = card.querySelector('img');
  if (image && categoryImages[index]) image.src = categoryImages[index];

  if (index > 0 && index < 5) {
    card.href = '#categories';
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const name = card.querySelector('strong')?.textContent || 'Esta categoría';
      const target = card.querySelector('span');
      if (target) target.textContent = 'Próximamente';
      const sectionNote = document.querySelector('.categories-section .section-heading p');
      if (sectionNote) sectionNote.textContent = `${name}: la sección se incorporará durante el desarrollo.`;
    });
  }
});

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