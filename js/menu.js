function Menu() {
  const open__menu = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__list");
  open__menu.addEventListener("click", () => {
    menu.classList.toggle("nav__list--show");
  });
}
Menu();

//SCROLL UP

document.querySelector(".footer__up__img").addEventListener("click", ScrollUp);
function ScrollUp() {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(ScrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 15));
    buttonUp.style.transform =" scale(0)";
  }
}

buttonUp = document.querySelector('.footer__up');

window.onscroll = function(){
  let scroll = document.documentElement.scrollTop;
  if(scroll > 700){
    buttonUp.style.transform =" scale(1)";
  }else if(scroll < 700){
    // buttonUp.style.transform =" scale(0)";
  }
}