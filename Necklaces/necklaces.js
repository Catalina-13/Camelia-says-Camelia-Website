
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


const row0img0 = ['Rose Gold Dainty Beaded Necklace.jpg', 'Rose Gold Dainty Beaded Necklace1.jpg', 'Rose Gold Dainty Beaded Necklace2.jpg'];
const row0img1 = ['Popcorn necklace.jpg', 'Popcorn necklace1.jpg', 'Popcorn necklace2.jpg'];
const row0img2 = ["New wave silver necklace.jpg", 'New wave silver necklace1.jpg', 'New wave silver necklace2.jpg'];
const row0img3 = ['Torsade Vermeil Necklace.jpg', 'Torsade Vermeil Necklace1.jpg', 'Torsade Vermeil Necklace2.jpg'];
const row1img0 = ["Collier mariage de dos fine.jpg", 'Collier mariage de dos fine1.jpg', 'Collier mariage de dos fine2.jpg'];
const row1img1 = ["Mothers day Personalized Gift.jpg", 'Mothers day Personalized Gift1.jpg', 'Mothers day Personalized Gift2.jpg'];
const row1img2 = ["Orchids Flower Necklace.jpg", 'Orchids Flower Necklace1.jpg', "Orchids Flower Necklace2.jpg"];
const row1img3 = ["Bridesmaids Necklace Greek Eye.jpg", "Bridesmaids Necklace Greek Eye1.jpg", "Bridesmaids Necklace Greek Eye2.jpg"];
const row2img0 = ["Minimalist Gold Necklace.jpg", "Minimalist Gold Necklace1.jpg", "Minimalist Gold Necklace2.jpg"];
const row2img1 = ["Gemstone Necklaces.jpg", "Gemstone Necklaces1.jpg", "Gemstone Necklaces2.jpg"];
const row2img2 = ["Perl Necklace.jpg", "Perl Necklace1.jpg", "Perl Necklace2.jpg"];
const row2img3 = ["Crystal bridal necklace.jpg", "Crystal bridal necklace1.jpg", "Crystal bridal necklace2.jpg"];


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
    console.log(index);
  }
  if (dir === -1) {
    if (index === 0) index = image_in_JS[1].length - 1;
    else index -= 1;
    console.log(index);
  }
  image_in_DOM.src = image_in_JS[1][index];
}

