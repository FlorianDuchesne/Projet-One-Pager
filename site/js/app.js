/*document.querySelector(".burger").addEventListener("click", function () {​​​​  
//toggle = alterner  //dans le document, on recherche le selecteur .nav, 
// on regarde sa liste de class, et on lui demande d'alterner entre ajouter/supprimer la class visible  
document.querySelector("nav").classList.toggle("myLinks");}​​​​);
*/

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('myLinks')
})

// CAROUSEL //

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

