const strDescription = `In this portfolio, I display my main web
  programming projects. It includes a conference web page,
  a to-do-list organizer, an awesome book catalog, uses local storage,
  and a simple UI to track a record of books. The main technologies
  that I am using are: `;
  
const strDescription2 = `For the elaboration
  of awesome books, we learned to import and export modules and the
  basic configuration of webpack, and the use of classes and linked list.
  For the to-do-list application we use jest to create simple tests
  for our methods more interesting applications will be incorporated as
  we advance in the course. Expect our next releases`;

const strDescriptionDesktop = strDescription+strDescription2;
const strDescriptionMobile = `Lorem Ipsum
 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`;


 strDescriptionDesktopCard0 = `This is an activities organizer. Or a to-do-list app. You can add, check , and delete activities from the local storage`;

const introObj = {
  name: 'My Portfolio',
  name_desktop: 'Keeping track of my recent projects',
  description: strDescription,
  description_desktop: strDescriptionDesktop,
  description_mobile: strDescriptionMobile,
  featured_image: './images/img-work-mobile.png',
  featured_image_desktop: './images/Snapshoot-Portfolio.png',
  technologies: ['JavaScript', 'HTML', 'CSS'],
  link_to_live_version: '#',
  link_to_source: '#',
};

const cardsInfo = [
  {
    name: 'To-do-list',
    name_desktop: 'To-do-list',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description_desktop: strDescriptionDesktopCard0,
    description_mobile: strDescriptionMobile,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Screenshot-to-do-list.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_to_live_version: 'https://edahigure.github.io/to-do-list/dist/',
    link_to_source: 'https://github.com/edahigure/to-do-list',
  },
  {
    name: 'Website Portfolio-1',
    name_desktop: 'Website Portfolio-1',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description_desktop: strDescriptionDesktop,
    description_mobile: strDescriptionMobile,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Snapshoot-Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_to_live_version: '#',
    link_to_source: '#',
  },
  {
    name: 'Profesional Art Printing Data-2',
    name_desktop: 'Profesional Art Printing Data-2',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description_desktop: strDescriptionDesktop,
    description_mobile: strDescriptionMobile,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Snapshoot-Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_to_live_version: '#',
    link_to_source: '#',
  },
  {
    name: 'Data Dashboard Healthcare-3',
    name_desktop: 'Data Dashboard Healthcare-3',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description_desktop: strDescriptionDesktop,
    description_mobile: strDescriptionMobile,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Snapshoot-Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_to_live_version: '#',
    link_to_source: '#',
  },
  {
    name: 'Website Portfolio-4',
    name_desktop: 'Website Portfolio-4',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description_desktop: strDescriptionDesktop,
    description_mobile: strDescriptionMobile,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Snapshoot-Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_to_live_version: '#',
    link_to_source: '#',
  },
  {
    name: 'Website Portfolio-5',
    name_desktop: 'Website Portfolio-5',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    description_desktop: strDescriptionDesktop,
    description_mobile: strDescriptionMobile,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Snapshoot-Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    link_to_live_version: '#',
    link_to_source: '#',
  },
];

const cardWorks = document.querySelector('.card-first');

const bigString = `<div class="wrapper-flex-2">

  <img src="${introObj.featured_image}" class="image-work" alt="Multi-Post Stories">
  <div class="wrapper-flex-3">
    <h3 class="title-multi">
      ${introObj.name}
    </h3>

    <div class="works-description">
      ${introObj.description}
    </div>
    
    <ul class="button-container">
      <li class="button1">css</li>
      <li class="button1">html</li>
      <li class="button1">bootstrap</li>
      <li class="button1">Ruby</li> 
      <button class="button2" id="button-card-intro">See Project</button>                  
    </ul>         
  </div>
  

</div>
`;

cardWorks.innerHTML = bigString;

const wrapperCards = document.querySelector('.wrapper-cards');
let bufferStr = `<div class="card card-0">
<button class="orange-button" id = "button-card-0" >
  See Project
</button>                
</div>`;
for (let i = 1; i < cardsInfo.length; i += 1) {
  const project = cardsInfo[i];
  bufferStr += `<div class="card card-${i}">
  <h2 class="title-post"> ${project.name}</h2>
  <p class="supporting-text">${project.description}</p>

  <ul class="button-container-float">
     <li class="button3">${project.technologies[0]}</li>
     <li class="button3">${project.technologies[1]}</li>
     <li class="button3">${project.technologies[2]}</li>                          
  </ul>      
  <button class="orange-button" id = "button-card-${i}">
    See Project
  </button>            
</div>

`;
}

function makeCard(obj) {
  return `
    <div class="overlay">
    </div>
    <div class="window" id = "popup-details">
      <div class="window-header"> 
        <h2 class="popup-title">${obj.name}</h2>
        <h2 class="popup-title-desktop">${obj.name_desktop}</h2>
        <div class="close-btn-popup" id="close-popup"><img src="./images/Icon-Cancel.png" alt="Close button image"  id="close-btn-popup"></div>
      </div>
      <div class="button-group">
        <div class="button-popup">${obj.technologies[0]}</div>
        <div class="button-popup">${obj.technologies[1]}</div>
        <div class="button-popup">${obj.technologies[2]}</div>
      </div>

      <div class = "wrapper-popup-1">         
        <img class="img-popup-desktop" src="${obj.featured_image_desktop}" alt="Project image" >
        <div class = "wrapper-popup-2"> 
          <p class="description-popup">
            ${obj.description_mobile}
          </p>

          <p class="description-popup-desktop">
            ${obj.description_desktop}
          </p>
          

          <div class="button-group">
          <a href="${obj.link_to_live_version}"> <button type="button" class="live-button letter-style"> See Live  <img src="./images/Icon-Export.png" alt="See live icon"/> </button> </a>
          <a href="${obj.link_to_source}"> <button type="button" class="live-button letter-style">See Source<img src="./images/Frame.png" alt="Github icon"/></button>
          </div>
        </div>
      <div>            
    </div>`;
}

wrapperCards.innerHTML = bufferStr;

let closePopup;

function closePopupFunc() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = '';
  popupWindow.style.display = 'none';
}

const cardIntro = document.querySelector('#button-card-intro');

function displayIntro() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(introObj);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}
cardIntro.addEventListener('click', displayIntro);

const card0 = document.querySelector('#button-card-0');
function displayCard0() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(cardsInfo[0]);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}
card0.addEventListener('click', displayCard0);

const card1 = document.querySelector('#button-card-1');
function displayCard1() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(cardsInfo[1]);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}
card1.addEventListener('click', displayCard1);

const card2 = document.querySelector('#button-card-2');
function displayCard2() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(cardsInfo[2]);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}
card2.addEventListener('click', displayCard2);

const card3 = document.querySelector('#button-card-3');
function displayCard3() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(cardsInfo[3]);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}
card3.addEventListener('click', displayCard3);

const card4 = document.querySelector('#button-card-4');
function displayCard4() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(cardsInfo[4]);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}

card4.addEventListener('click', displayCard4);

const card5 = document.querySelector('#button-card-5');
function displayCard5() {
  const popupWindow = document.querySelector('#popup-window');
  popupWindow.innerHTML = makeCard(cardsInfo[5]);
  popupWindow.style.display = 'block';
  closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', closePopupFunc);
}
card5.addEventListener('click', displayCard5);
