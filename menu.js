// Reference elements
const hamburger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menu');
const backgroundOverlay = document.querySelector('.nav__background');
const closeBtn = document.querySelector('.nav__menu__closeBtn');

// Handle Management
const handleToggleMenu = () => {
  setTimeout(() => {
    menu.classList.toggle('nav__menu--active');
  }, 200);
  backgroundOverlay.classList.toggle('nav__background--active');
};

const handleCloseMenu = () => {
  menu.classList.remove('nav__menu--active');
  backgroundOverlay.classList.remove('nav__background--active');
};

// Event Listeners
hamburger.addEventListener('click', handleToggleMenu);
menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__menuLink')) {
    handleCloseMenu();
  }
});
closeBtn.addEventListener('click', handleCloseMenu);
window.addEventListener('scroll', handleCloseMenu);
