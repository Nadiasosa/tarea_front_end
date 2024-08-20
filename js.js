let slideIndex = 0, timer;
showSlides(slideIndex);
carruselAutomatico();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // slideIndex = slideIndex + 1 / 1 = 1 + -1
  clearTimeout(timer);
  timer = setTimeout(carruselAutomatico, 6000);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function carruselAutomatico(){
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(carruselAutomatico, 6000);
}

/* ------------------ */

/* Barra de navegacion */



function myLinksAnchors(h){
  var h = window.matchMedia("(max-width: 768px)")
  if (h.matches){
  myLinks();
  anchors();
  }
}

function myLinks() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function anchors(){
  var f = document.getElementById("myLinksAnchor");
  if (f.className === "display") {
    f.className += " myLinks";
  } else {
    f.className = "display";
  }
}

// Formulario