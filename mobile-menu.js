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