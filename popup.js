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
            <button class="button2">See Project</button>                                  
        </ul>               
    </div>
    

</div>
`;

card_works.innerHTML = big_string; 