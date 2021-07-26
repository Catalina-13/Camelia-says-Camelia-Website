//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


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
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}


const row0img0 = ['Boho Surfer Bracelet.jpeg', 'Boho Surfer Bracelet1.jpeg', 'Boho Surfer Bracelet2.jpeg'];
const row0img1 = ['Bracelet elastique a breloques.jpeg', 'Bracelet elastique a breloques1.jpeg', 'Bracelet elastique a breloques2.jpeg'];
const row0img2 = ["Bracelet elastique avec cristaux.jpeg", 'Bracelet elastique avec cristaux1.jpeg', 'Bracelet elastique avec cristaux2.jpeg'];
const row0img3 = ['Bracelet en acier love.jpeg', 'Bracelet en acier love1.jpeg', 'Bracelet en acier love2.jpeg'];
const row1img0 = ["Bracelet reglable argente.jpeg", 'Bracelet reglable argente1.jpeg', 'Bracelet reglable argente2.jpeg'];
const row1img1 = ["Bracelet reglable avec perles fantaisie.jpeg", 'Bracelet reglable avec perles fantaisie1.jpeg', 'Bracelet reglable avec perles fantaisie2.jpeg'];
const row1img2 = ["Bracelet Reglable Coquillage.jpeg", 'Bracelet Reglable Coquillage1.jpeg', "Bracelet Reglable Coquillage2.jpeg"];
const row1img3 = ["Bracelet Reglable en acier arbre de la vie.jpeg", "Bracelet Reglable en acier arbre de la vie1.jpeg", "Bracelet Reglable en acier arbre de la vie2.jpeg"];
const row2img0 = ["Bracelet reglable en acier coeurs.jpeg", "Bracelet reglable en acier coeurs1.jpeg", "Bracelet reglable en acier coeurs2.jpeg"];
const row2img1 = ["Bracelet shell.jpeg", "Bracelet shell1.jpeg", "Bracelet shell2.jpeg"];
const row2img2 = ["Lot de bracelets elastiques avec coquillage.jpeg", "Lot de bracelets elastiques avec coquillage1.jpeg", "Lot de bracelets elastiques avec coquillage2.jpeg"];
const row2img3 = ["Set de bracelets elastiques avec pierres.jpeg", "Set de bracelets elastiques avec pierres1.jpeg", "Set de bracelets elastiques avec pierres2.jpeg"];


const image_numbers = [[['row0img0',row0img0], ['row0img1', row0img1], ['row0img2', row0img2], ['row0img3', row0img3]], 
                      [['row1img0', row1img0], ['row1img1', row1img1], ['row1img2', row1img2], ['row1img3', row1img3]], 
                      [['row2img0', row2img0], ['row2img1', row2img1], ['row2img2', row2img2], ['row2img3', row2img3]]];


function shift(dir, row, col){
  let image_in_JS = image_numbers[row][col];
  let image_in_DOM = document.getElementById(image_in_JS[0]);
  let image_source = image_in_DOM.getAttribute('src');
  let index = image_in_JS[1].indexOf(image_source);
  if (dir === 1) {
    if (index === image_in_JS[1].length - 1) index = 0;
    else index += 1;
  }
  if (dir === -1) {
    if (index === 0) index = image_in_JS[1].length - 1;
    else index -= 1;
  }
  image_in_DOM.src = image_in_JS[1][index];
}