const navbar = document.getElementById('navbar');
let scrolled = false;

const links = document.querySelectorAll(".navbar ul a");

window.onscroll = function(){
  if(window.pageYOffset > 100){
    navbar.classList.remove('top');
    if(!scrolled){
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function(){
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  }else{
    navbar.classList.add('top');
    scrolled = false;
  }
}

/* Smooth Scroll */

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop-70;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
};