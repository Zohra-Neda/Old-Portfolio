const hamburgerContainer = document.querySelector('.hamburger-container');
const hamburgerItems = document.querySelectorAll('.menuLink');
const closeHamburger = document.querySelector('.hamburger-close');
const openHamburger = document.querySelector('#hamburger');

function hamburgerShow() {
  hamburgerContainer.setAttribute('style', 'display: block');
}

function hamburgerHide() {
  hamburgerContainer.setAttribute('style', 'display: none');
}

openHamburger.addEventListener('click', hamburgerShow);
closeHamburger.addEventListener('click', hamburgerHide);

hamburgerItems.forEach((item) => {
  item.addEventListener('click', hamburgerHide);
});