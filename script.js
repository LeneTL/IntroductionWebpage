function changeLight(){
    document.body.classList.toggle('lightmode')
    if(document.body.classList.contains('lightmode')){
        (document.getElementById('lightImgToggle').src = 'Image/moon.png') 
        (document.getElementById('wrapColourChange').style.backgroundColor = '#85b889ff')
        // (document.getElementById('cardColourChange').style.backgroundColor = '#b7e4bdff')
        // (document.getElementsByClassName("card").style.backgroundColor = '#345539ff')
    }else
        (document.getElementById('lightImgToggle').src = 'Image/sun.png')
        (document.getElementById('wrapColourChange').style.backgroundColor = '#3b1111')
        // (document.getElementsByClassName("card").backgroundColor = '#745d2eff')

}

// SLIDESHOW!!! (jeg vet ikke helt hva jeg har gjort her...)
let slideIndex = 1;
showSlides(slideIndex);

function numberSlide(n){
    showSlides(slideIndex += n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";

}