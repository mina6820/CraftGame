let game1 = document.getElementById("g1");

game1.addEventListener('click', function(){
    open('Hangman/index.html', '_self');
})

let game2 = document.getElementById("g2");

game2.addEventListener('click', function(){
    open('mind/index.html', '_self');
})

let game3 = document.getElementById("g3");

game3.addEventListener('click', function(){
    open('connect/index.html', '_self');
})

let game4 = document.getElementById("g4");

game4.addEventListener('click', function(){
    open('memory/index.html', '_self');
})


/* Start Our Team */ 
var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 50,
   centerSlide:'true',
   fade:'true',
   grabCursor: 'true',
   dynamicBullets:'true',
   loop: true,

   pagination: {
   el: ".swiper-pagination",
   clickable: true,
   },
   navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      }
   }
});
/* End Our Team*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
