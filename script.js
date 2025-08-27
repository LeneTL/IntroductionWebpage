function changeAllCards(color){ //Takk Martin
    const elements = document.getElementsByClassName("card");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = color
    }
}

//get elementById/ClassName funket ikke for card fordi card hadde flere.. ting å se på?(card.card-a card.card-b osv.) HTMLCollection
function changeLight(){
    document.body.classList.toggle('lightmode')
    if(document.body.classList.contains('lightmode')){
        document.getElementById('lightImgToggle').src = 'Image/moon.png'
        document.getElementById('wrapColourChange').style.backgroundColor = '#85b889ff'
        changeAllCards('#9ec1e8ff')
        
    }else{
        document.getElementById('lightImgToggle').src = 'Image/sun.png'
        document.getElementById('wrapColourChange').style.backgroundColor = '#3b1111'
        changeAllCards('#5a5050')
}
}

// SLIDESHOW!!! (jeg vet ikke helt hva jeg har gjort her...) https://www.w3schools.com/howto/howto_js_slideshow.asp
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