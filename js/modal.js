const works = [
  {
    name: 'DRIVESHARE',
    image: './images/drive-share.png',

    tags: ['Drive Share', 'Full Stack Dev', '2023'],
    live: 'https://drive-share-app-frontend.onrender.com/',
    repository: 'https://github.com/Zohra-Neda/DriveShare-Back-End',
    technology: ['Ruby on Rails', 'React JS', 'Redux', 'Postgresql', 'Tailwind CSS'],
    description: `DriveShare is a comprehensive full-stack web application designed to streamline the processes of adding, reserving, and deleting cars.`,
  },
  {
    name: 'Metrics Web App',
    image: './images/metrics-web-app.png',

    tags: ['Metrics Web App', 'Front End Dev', '2023'],
    live: 'https://metrics-web-app-zn.onrender.com/',
    repository: 'https://github.com/Zohra-Neda/Metrics-Web-App',
    technology: ['React', 'Redux', 'HTML5', 'CSS3'],
    description: `This is a React application that displays information about various cryptocurrencies using data from the CoinStats API (https://api.coinstats.app/public/v1/coins). The app allows users to search for specific cryptocurrencies, view detailed information about each currency, and filter currencies by price, market cap, and other metrics.`,
  },
  {
    name: "Space-Travelers' Hub",
    image: './images/space-travelers-hub.PNG',

    tags: ["Space-Travelers' Hub", 'Front End Dev', '2023'],
    live: 'https://space-travelers-hub-h0bs.onrender.com/',
    repository: 'https://github.com/Zohra-Neda/Space-Travelers-Hub',
    technology: ['HTML', 'CSS', 'React', 'Redux'],
    description:
      `The Space Traveler Hub is an app built with React and Redux. On the main page, it displays rockets along with their detailed explanations. The mission page allows users to view available missions. Users are also allowed to reserve missions or join meetings. In the "My Profile" page, users can see the missions they have joined and the rockets they have reserved.`,
  },
  {
    name: 'Awesome Movies',
    image: './images/awesome-movies.PNG',

    tags: ['Awesome Movies', 'Front End Dev', '2023'],
    live: 'https://zohra-neda.github.io/JavaScript-Capstone-Project/dist/',
    repository: 'https://github.com/Zohra-Neda/JavaScript-Capstone-Project',
    technology: ['HTML', 'CSS', 'JavaScript'],
    description:
      `Welcome to our open-source website repository on GitHub! this website utilizes APIs to provide an interactive platform for visitors to engage with the content and share their thoughts.`,
  },

  {
    name: 'Awesome Books',
    image: './images/awesome-books.PNG',
    tags: ['Awesome Books', 'Front End Dev', '2023'],
    live: 'https://zohra-neda.github.io/Awesome-Books/',
    repository: 'https://github.com/Zohra-Neda/Awesome-Books',
    technology: ['HTML', 'CSS', 'JavaScript'],
    description:
      ` is a mini website which is created by html css and javascript, looking for a fun and interactive way to organize your book collection? Look no further than Awesome Book! This mini website is the perfect solution for book lovers who want to keep track of their favorite reads in a visually appealing and user-friendly way.`,
  },
  {
    name: 'To-Do List',
    image: './images/todo-list.png',
    tags: ['To-Do', 'Front End Dev', '2023'],
    live: 'https://zohra-neda.github.io/To-Do-List/dist/',
    repository: 'https://github.com/Zohra-Neda/To-Do-List',
    technology: ['HTML5', 'CSS3', 'JavaScript(ES6)', 'Webpack'],
    description:
      `is a mini app in which the user can add, edit, complete or delete tasks. And user can also clear all the completed tasks.`,
  },
];

const sectionPortfolio = document.querySelector('.works');

function projectsAll() {
  works.forEach((work) => {
    const portfolioCard = document.createElement('div');
    portfolioCard.classList.add('skills');
    portfolioCard.innerHTML = `<article class="d-flex flex-column card">
 <div class="card-image">
     <img src=${work.image} alt="tonic image">
 </div>
 <div class="card-content">
     <div class="primary-text">
         <h2>${work.name}</h2>
         <div class="frame d-flex">
             <h6>${work.tags[0]}</h6>
             <div class="circle"></div>
             <p>${work.tags[1]}</p>
             <div class="circle"></div>
             <p>${work.tags[2]}</p>
         </div>
         <p>${work.description}</p>
     </div>
     <ul class="bags d-flex list-none">
       ${work.technology
         .map((item) => `<li class="tags-li">${item}</li>`)
         .join('')}  
     </ul>
     <div class="action">
         <button type="button" class="btn project button_project-1" data-tab="1">See Project</button>
     </div>
 </div>
</article>`;
    sectionPortfolio.appendChild(portfolioCard);
  });
}

function modalWindow() {
  const allWorks = [];

  works.forEach((work) => {
    const popupWindow = document.createElement('div');
    popupWindow.classList.add('modal-wrapper');
    popupWindow.innerHTML = `<div class="skills mod-container">
  <div class="modal-header">
  <p class="modal-close"><i class="fa-solid fa-xmark"></i></p>
  <h2>${work.name}</h2>
  <ul class="tags">
  <li class="diff-li">${work.tags[0]}</li>
  <li>${work.tags[1]}</li>
  <li>${work.tags[2]}</li>
  </ul>
  </div>
  
  <img class="sample mod" src='${
    work.image
  }' alt="multi-purpose stories project snapshoot">
  
  <header class="project-header">
  <p class="project-header-p">${work.description}</p>

  <div class="header-desc">
  <ul class="set-stack">
  ${work.technology.map((tech) => `<li class="stack">${tech}</li>`).join('')}
  </ul>
  <div class="rule"></div>
  <div class="btnflex">
  <a target="_blank" href="${
    work.live
  }" class="btn mod" type="submit">see live<img class="btn-icon" src="./images/Icon.png" alt="check live version"></a>
  <a target="_blank" href="${
    work.repository
  }" class="btn mod" type="submit">see source<img class="btn-icon" src="./images/github.png" alt="check live version"></a
  </div>
  </div>
  
  </header>
  </div>`;
    allWorks.push(popupWindow);
  });
  return allWorks;
}

function eachModal() {
  const seeProjectBtn = document.querySelectorAll('.project');
  const allProjectModal = modalWindow();

  for (let i = 0; i < seeProjectBtn.length; i += 1) {
    seeProjectBtn[i].addEventListener('click', () => {
      allProjectModal[i].classList.add('active');
      sectionPortfolio.appendChild(allProjectModal[i]);

      const close = document.querySelectorAll('.modal-close');
      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.remove(
            'active',
          );
        });
      });
    });
  }
}

projectsAll();
eachModal();
