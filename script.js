const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function() {
      const filter = searchInput.value.toLowerCase();
      for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        items[i].style.display = itemText.includes(filter) ? '' : 'none';
      }
    });