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
let slideNumber = 1; //declare to start on slide 1
showSlides(); //show it (hide all the others)

function numberSlide(number){
    slideNumber= slideNumber + number; //
    showSlides();
    // i++ 
    // i=i+number
    // i+=number
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides"); //we pick up the list(Array) (div elements 0-5) from the class
    if (slideNumber > slides.length) { // if we try to move past the number of images(divs) that we have
        slideNumber = 1; //then it returns to 1 (because we don't want it to go over into nothing (7)
    }

    if (slideNumber < 1) { //if we try to move lower than the number of images(divs) we have
        slideNumber = slides.length; //then we return to the end of the images(divs) we have
    }
    for (let i = 0; i < slides.length; i++) { // (i is a counter) the loop goes through all the images(divs) 
        slides[i].style.display = "none"; // and hides them
    }
    slides[slideNumber-1].style.display = "block"; //shows the chosen image(div)

}