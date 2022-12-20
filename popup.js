let str_description = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";

let intro_obj = {
    name: 'Multi-Post Stories', 
    description: str_description, 
    featured_image: './images/img-work-mobile.png',
    technologies: [ 'css', 'html', 'bootstrap', 'Ruby' ],
    link_to_live_version: '#',
    link_to_source: '#'
}


let cards_info =  [
    {
        name: 'Data Dashboard Healthcare', 
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", 
        featured_image: './images/img-work-mobile.png',
        technologies: [ 'html', 'bootstrap', 'Ruby' ],
        link_to_live_version: '#',
        link_to_source: '#'        
    },
    {
        name: 'Website Portfolio', 
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", 
        featured_image: './images/img-work-mobile.png',
        technologies: [ 'html', 'bootstrap', 'Ruby' ],
        link_to_live_version: '#',
        link_to_source: '#'        
    },
    {
        name: 'Profesional Art Printing Data', 
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", 
        featured_image: './images/img-work-mobile.png',
        technologies: [ 'html', 'bootstrap', 'Ruby' ],
        link_to_live_version: '#',
        link_to_source: '#'        
    },
    {
        name: 'Data Dashboard Healthcare', 
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", 
        featured_image: './images/img-work-mobile.png',
        technologies: [ 'html', 'bootstrap', 'Ruby' ],
        link_to_live_version: '#',
        link_to_source: '#'        
    },
    {
        name: 'Website Portfolio', 
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", 
        featured_image: './images/img-work-mobile.png',
        technologies: [ 'html', 'bootstrap', 'Ruby' ],
        link_to_live_version: '#',
        link_to_source: '#'        
    },
    {
        name: 'Website Portfolio', 
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", 
        featured_image: './images/img-work-mobile.png',
        technologies: [ 'html', 'bootstrap', 'Ruby' ],
        link_to_live_version: '#',
        link_to_source: '#'       
    }
];

const card_works = document.querySelector('.card-first');

let big_string=`
<div class="wrapper-flex-2">

    <img src="${intro_obj.featured_image}" class="image-work" alt="Multi-Post Stories">


    <div class="wrapper-flex-3">
        <h3 class="title-multi">
            ${intro_obj.name}
        </h3>

        <p class="works-description">
            ${intro_obj.description}
        </p>
        
        <ul class="button-container">
            <li class="button1">css</li>
            <li class="button1">html</li>
            <li class="button1">bootstrap</li>
            <li class="button1">Ruby</li> 
            <button class="button2" id="see_project">See Project</button>                                  
        </ul>               
    </div>
    

</div>
`;

card_works.innerHTML = big_string; 

const wrapperCards = document.querySelector('.wrapper-cards');
let buffer_str=`<div class="card card-0">
<a class="orange-button" id = "button-card-0" href="#">
    See Project
</a>                                
</div>`;
for(let i=1;i<cards_info.length;i++){
    let project = cards_info [i];    
    buffer_str+=`<div class="card card-${i}">
    <h2 class="title-post"> ${project.name}</h2>
    <p class="supporting-text">${project.description}</p>

    <ul class="button-container-float">
       <li class="button3">${project.technologies[0]}</li>
       <li class="button3">${project.technologies[1]}</li>
       <li class="button3">${project.technologies[2]}</li>                                                    
    </ul>            
    <a class="orange-button" id = "button-card-${i}" href="#">
        See Project
    </a>                        
</div>

`;

}

wrapperCards.innerHTML=buffer_str;

const see_project = document.querySelector("#see_project");
const popup_window =  document.querySelector("#popup-window");

function display(project) {

    let str_buf=`
    <div class="window-header"> 
    <h2>Multi Post Stories</h2>
    <div class="close-btn-popup" id="close-popup"><img src="./images/Icon-Cancel.png" alt="Close button image"  id="close-btn-popup"></div>
</div>
<div class="label-group">
    <div class="button-popup">html</div>
    <div class="button-popup">Bootstrap</div>
    <div class="button-popup">Ruby on rails</div>
</div>
<img src="./images/Snapshoot-Portfolio.png" alt="Project image" >
<p class="description-popup">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
</p>
<div class="button-group">
    <button type="button" class="live-button letter-style">See Live <img src="./images/Icon-Export.png" alt="See live icon"/> </button>
    <button type="button" class="live-button letter-style">See Source<img src="./images/Frame.png" alt="Github icon"/></button>
</div>
    
    `;

    const popup_details = document.querySelector("#popup-details");
    popup_details.innerHTML = str_buf;
    popup_window.style.display = 'block';
  }
  
  function hide() {
    popup_window.style.display = 'none';
  }

  see_project.addEventListener('click', display);
  
  const close_popup = document.querySelector("#close-popup");

  close_popup.addEventListener('click', hide);

  const button_card_0 = document.querySelector("#button-card-0");

  button_card_0.addEventListener('click',display);
