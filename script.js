const hamburgerContainer = document.querySelector('.hamburger-container');
const hamburgerItems = document.querySelectorAll('.menuLink');
const closeHamburger = document.querySelector('.hamburger-close');
const openHamburger = document.querySelector('#hamburger');
const projectsBtn = document.querySelectorAll('projects-btn');
const modalClose = document.querySelector('modal-close');

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

const projectContainer = document.querySelector('.project-container');

// CART SECTION START

const cardContainer = document.querySelector('.cart-container');

const cardSectionProject = [
  {
    id: 1,
    image: 'Img Placeholder.svg',
    title: 'Multi-Post Stories',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    lang1: 'CSS',
    lang2: 'HTML',
    lang3: 'Bootstrap',
    lang4: 'Ruby',
    button: 'See Project',
  },
  {
    cardNumber: 1,
    cardTitle: 'Professional Art Printing Data',
    cardParagraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.',
    lang1: 'HTML',
    lang2: 'Bootstrap',
    lang3: 'Ruby',
    button: 'See Project',
  },
  {
    cardNumber: 2,
    cardTitle: 'Professional Art Printing Data',
    cardParagraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.',
    lang1: 'HTML',
    lang2: 'Bootstrap',
    lang3: 'Ruby',
    button: 'See Project',
  },
  {
    cardNumber: 3,
    cardTitle: 'Professional Art Printing Data',
    cardParagraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.',
    lang1: 'HTML',
    lang2: 'Bootstrap',
    lang3: 'Ruby',
    button: 'See Project',
  },

];

// T s
function cardSectionProjectFunction() {
  const cardRowOne = document.createElement('div');
  cardRowOne.classList.add('cart-row1');
  const cardRowTwo = document.createElement('div');
  cardRowTwo.classList.add('cart-row2');

  cardSectionProject.forEach((Project, index) => {
    if (index === 0) {
      const projectDetails = document.createElement('div');
      projectDetails.classList.add('project-details');
      projectDetails.innerHTML = `
        <h2 class="project-item second-tittle">${Project.title}</h2>
        <p class="project-item project-p">${Project.paragraph}</p>
        <ul class="project-item lang-buttons-container">
          <li class="lang-list lang-css"><a class="lang-list-link" href="#">${Project.lang1}</a></li>
          <li class="lang-list lang-html"><a class="lang-list-link" href="#">${Project.lang2}</a></li>
          <li class="lang-list lang-boot"><a class="lang-list-link" href="#">${Project.lang3}</a></li>
          <li class="lang-list lang-ruby"><a class="lang-list-link" href="#">${Project.lang4}</a></li>
        </ul>
        <button class="project-item buttons project-button projects-btn" onClick='popupShow();' id="pro-btn" type="button">${Project.button}</button>`;

      projectContainer.innerHTML = `
      <img class="project-item project-image" src="./images/mobile-images/section-1/${Project.image}" alt="project-image">`;

      projectContainer.appendChild(projectDetails);
    } else {
      [cardRowOne, cardRowTwo].forEach((row) => {
        row.innerHTML += `
          <div class="cart-project-container hide-text">
            <h2 class="cart-project-item cart-title">${Project.cardTitle}</h2>
            <p class="cart-project-item cart-p">${Project.cardParagraph}</p>
            <ul class="card-project-item cart-lang-container">
              <li class="cart-lang-item cart-lang-html"><a class="cart-lang-link" href="#">${Project.lang1}</a></li>
              <li class="cart-lang-item cart-lang-boot"><a class="cart-lang-link" href="#">${Project.lang2}</a></li>
              <li class="cart-lang-item cart-lang-ruby"><a class="cart-lang-link" href="#">${Project.lang3}</a></li>
            </ul>
            <button class="cart-project-item project-btn buttons projects-btn" type="button" onClick='popupShow();'>${Project.button}</button>
          </div>`;
      });
      cardContainer.appendChild(cardRowOne);
      cardContainer.appendChild(cardRowTwo);
    }
  });
}
// T E

window.addEventListener('load', cardSectionProjectFunction);
// CART SECTION END

const popupContainer = document.querySelector('.popup-container');

const popupContent = {
  title: 'Multi Post Stories',
  closeButton: '&#x2716;',
  lang1: 'HTML',
  lang2: 'Bootstrap',
  lang3: 'Ruby on Rails',
  image: 'mobile-popup-img.svg',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  button1: 'See Live',
  button2: 'See Sources',
};

function popUpWindow() {
  popupContainer.innerHTML = `
  <div class="popup-content des-pop-content">
    <div class="popup-details">
      <div class="modal-header">
        <h2 class="popup-title">${popupContent.title}</h2>
        <button type="button" class="modal-close" onClick='popupHide();'>${popupContent.closeButton}</button>
      </div>
      <ul class="techs-container">
        <li class="tech-item tech-html"><a class="tech-item-link" href="#">${popupContent.lang1}</a></li>
        <li class="tech-item tech-boot"><a class="tech-item-link" href="#">${popupContent.lang2}</a></li>
        <li class="tech-item tech-ruby"><a class="tech-item-link" href="#">${popupContent.lang3}</a></li>
      </ul>
      <div class="details-container">
        <img class="popup-image" src="./images/mobile-images/section-1/${popupContent.image}" alt="popup-img" srcset="">
        <div class="para-container">
          <p class="popup-p">${popupContent.paragraph}</p>
          <div class="buttons-container">
            <button class="popup-btn1" type="button"><a class="popup-links" href="#">${popupContent.button1}</a><span class="fa-sharp fa-solid fa-arrow-up-right-from-square popup-icon"></span></button>
            <button class="popup-btn2" type="button"><a class="popup-links" href="#">${popupContent.button2}</a><span class="fa fa-github popup-icon" popup-icon"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

window.addEventListener('load', popUpWindow);

function popupHide() {
  popupContainer.setAttribute('style', 'display:none');
}

function popupShow() {
  popupContainer.setAttribute('style', 'display:block');
}

// projectsBtn.addEventListener('click', popupShow);
// modalClose.addEventListener('click', popupHide);

// FORM VALIDATION START
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.alert');
const textArea = document.getElementById('text');

const emailRegExp = /^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]+(?:\.[a-z-0-9-]+)*$/;

form.addEventListener('submit', (e) => {
  if (!emailRegExp.test(email.value)) {
    e.preventDefault();
    error.textContent = 'Expected valid email address!';
  }

  else {
    error.textContent = '';
  }
});

// FORM VALIDATION END