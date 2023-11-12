
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//couner section 

let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) =>  {

let startValue = 0 ;
let endValue = parseInt(valueDisplay.getAttribute('data-value'));


let duration = Math.floor(interval/endValue);
let counter = setInterval (function(){

  startValue += 1;


  valueDisplay.textContent = startValue;

  if(startValue == endValue ){
    clearInterval(counter);
  }

}, duration);

});



// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');


// window.onscroll = () => {

//   section.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight ;

//     let id =sec.getAttribute('id');

//     if (top >= offset && top <offset  +height)
// {
//   navLinks.forEach(links => {

//     links.classList.remove('active');
//     document.querySelector('header nav a[ href='+ id+ ' ]').classList.add('active')


//   });
// };

//   });


// //staicky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky' , window.screenY > 100);


//remove toggle icon

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

//slider

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//reveal
ScrollReveal().reveal({
distance :'120px'

});

ScrollReveal().reveal('.home-contect', { duration:1500, delay: 150 });
ScrollReveal().reveal('.home-contect h2 .price-row .contact_row', { origin:'top', delay: 500 });
ScrollReveal().reveal('.counter-row', { delay: 375, delay :2000 });
ScrollReveal().reveal('#overview .row .col-2 ', { origin:'left' , delay: 375, delay :500 });
ScrollReveal().reveal('#overview .row .col-2 img ', { origin:'top' , delay: 375, delay :1000 });
ScrollReveal().reveal('.review .video ' , { origin:'bottom' , delay: 500, delay :500 });
ScrollReveal().reveal('.author .author_row' , { origin:'right' , delay: 500, delay :500 });