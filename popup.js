const strDescription = `In this portfolio, I display my main web
  programming projects. `;
  
const strDescriptionDesktop = strDescription;
const strDescriptionMobile = `In this portfolio, I display my main web
programming projects. `;

 const strDescriptionPortfolio = `In this portfolio, I display my main web
  programming projects. It includes: `;

 const strDescriptionDesktopCard0 = `This is an activities organizer. Or a to-do-list app. You can add, check , and delete activities from the local storage`;
 const strDescriptionMobile0 = `This is an activities organizer. Or a to-do-list app. You can add, check , and delete activities from the local storage`;


 strDescriptionDesktopReactReduxCapstone =  `Here we develop a data fetcher to get stock prices from NASCA market. We fetch the data by industry and display the information of each stoke, its price, name, and logo.`;  
 strDescriptionMobileReactReduxCapstone = `Here we develop a data fetcher to get stock prices from NASCA market. We fetch the data by industry and display the information of each stoke, its price, name, and logo.`;

const introObj = {
  name: 'My Portfolio',
  name_desktop: 'Keeping track of my recent projects',
  description: strDescriptionPortfolio,
  description_desktop: strDescriptionDesktop,
  description_mobile: strDescriptionMobile,
  featured_image: './images/img-work-mobile.png',
  featured_image_desktop: './images/portfolio.png',
  technologies: ['JavaScript', 'HTML', 'CSS'],
  link_to_live_version: 'https://edahigure.github.io/real-portfolio/',
  link_to_source: 'https://github.com/edahigure/real-portfolio',
};

const cardsInfo = [
  {
    name: 'To-do-list',
    name_desktop: 'To-do-list',
    description: "Here we show a todo list organizer for your activities",
    description_desktop: strDescriptionDesktopCard0,
    description_mobile: strDescriptionMobile0,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/Screenshot-to-do-list.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link_to_live_version: 'https://edahigure.github.io/to-do-list/dist/',
    link_to_source: 'https://github.com/edahigure/to-do-list',
  },
  {
    name: 'Stoke fetcher',
    name_desktop: 'Stoke fetcher',
    description: "Here we develop a data fetcher to get stock prices from NASCA market.",
    description_desktop: strDescriptionDesktopReactReduxCapstone,
    description_mobile: strDescriptionMobileReactReduxCapstone,

    featured_image: './images/react-redux-capstone.png',
    featured_image_desktop: './images/react-redux-capstone.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    link_to_live_version: 'https://edahigure.github.io/capstone-react-redux/',
    link_to_source: 'https://github.com/edahigure/capstone-react-redux',
  },
  {
    name: 'Space traveler\'s Hub',
    name_desktop: 'Space traveler\'s Hub',
    description: "Here we work with the real live data from the SpaceX API. ",
    description_desktop: `Here we work with the real live data from the SpaceX API.
     The task is to build a web application for a company that provides commercial and 
     scientific space travel services.
     The application will allow users to book rockets and join selected space missions.`,
    description_mobile: `Here we work with the real live data from the SpaceX API.
    The task is to build a web application for a company that provides commercial and 
    scientific space travel services.
    The application will allow users to book rockets and join selected space missions.`,
    featured_image: './images/img-work-mobile.png',
    featured_image_desktop: './images/traveler_space_hub.png',
    technologies: ['React', 'Redux', 'Javascript'],
    link_to_live_version: 'https://edahigure.github.io/space-travelers-hub/',
    link_to_source: 'https://github.com/edahigure/space-travelers-hub',
  },
  {
    name: 'Budget app',
    name_desktop: 'Pay services budget app',
    description: "The Budget app is about building a mobile web application where you can manage your budget",
    description_desktop: "The Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    description_mobile: "The Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    featured_image: './images/Budget-app-Screen-Shot.png',
    featured_image_desktop: './images/Budget-app-Screen-Shot.png',
    technologies: [ 'bootstrap', 'Ruby','Ruby on rails'],
    link_to_live_version: 'https://budget-app-7tph.onrender.com/',
    link_to_source: 'https://github.com/edahigure/budget-app',
  },
  {
    name: 'Book an appointment',
    name_desktop: 'Register recipes app',
    description: "This app allow you to book an appointment for an online school. ",
    description_desktop: "The Booking app keeps track of all your reservations, for online lectures. You can add and remove both lectures and reservations from the database, to display all informations for the lectures ",
    description_mobile: "The Booking app keeps track of all your reservations, for online lectures. You can add and remove both lectures and reservations from the database, to display all informations for the lectures ",
    featured_image: './images/Screen Shot online lectures.png',
    featured_image_desktop: './images/Screen Shot online lectures.png',
    technologies: [ 'Tailwind', 'React','Ruby on rails'],
    link_to_live_version: 'https://reserve-lectures.onrender.com',
    link_to_source: 'https://github.com/edahigure/Recipe-app.git',
  },
  {
    name: 'Bookstore',
    name_desktop: 'Bookstore',
    description: "Here we develop web app for a bookstore, to add books to a database ",
    description_desktop: `The Bookstore is a website similar to the Awesome Books website built in the previous module.\n
    You will create an simplified version of it that allows you to:\n
    Display a list of books\n
    Add a book\n
    Remove a selected book\n
    By building this application, you will learn how to use React and Redux in the context of a real application.`,
    description_mobile: `The Bookstore is a website similar to the Awesome Books website built in the previous module.\n
    You will create an simplified version of it that allows you to:\n
    Display a list of books\n
    Add a book\n
    Remove a selected book\n
    By building this application, you will learn how to use React and Redux in the context of a real application.`,

    featured_image: './images/bookstore-Screen-Shot.png',
    featured_image_desktop: './images/bookstore-Screen-Shot.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    link_to_live_version: 'https://edahigure.github.io/bookstore/',
    link_to_source: 'https://github.com/edahigure/bookstore',
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
      <ul>
      <li> A to-do-list organizer </li>
      <li> React Redux Capstone project</li>
      <li> A traveler\'s Space Hub center </li>
      </ul>
      
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
let bufferStr = '';
for (let i = cardsInfo.length-1; i >=0; i -= 1) {
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
          <a href="${obj.link_to_live_version}" target=”_blank”> <button type="button" class="live-button letter-style"> See Live  <img src="./images/Icon-Export.png" alt="See live icon"/> </button> </a>
          <a href="${obj.link_to_source}" target=”_blank”> <button type="button" class="live-button letter-style">See Source<img src="./images/Frame.png" alt="Github icon"/></button>
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

const card=[]

for(let i=0; i<cardsInfo.length; i+=1) {

  card[i] = document.querySelector(`#button-card-${i}`);
  function displayCard0() {
     const popupWindow = document.querySelector('#popup-window');
     popupWindow.innerHTML = makeCard(cardsInfo[i]);
     popupWindow.style.display = 'block';
     closePopup = document.getElementById('close-popup');
     closePopup.addEventListener('click', closePopupFunc);
  }
  card[i].addEventListener('click', displayCard0);

}

