(() => {
  const refs = {
    openMenulBtn: document.querySelector('.menu-button'),
    closeMenuBtn: document.querySelector('.mob-close-btn'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu () {
    refs.menu.classList.toggle('is-hidden');
  }
})();