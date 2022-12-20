const hambuger = document.querySelector("#hambuger");
const menu = document.querySelector("#mobile-menu");
const closeBtn = document.querySelector("#close-btn");

function display() {
  menu.style.display = "block";
}

function hide() {
    menu.style.display = "none";
  }

  hambuger.addEventListener('click',display);
  closeBtn.addEventListener('click',hide);

  portfolio=document.querySelector("#menu-portfolio");
  portfolio.addEventListener('click',hide);

  contact=document.querySelector("#menu-contact");
  contact.addEventListener('click',hide);

  about=document.querySelector("#menu-about");
  about.addEventListener('click',hide);

  