const slider = document.querySelectorAll(".carousel");
const nextButton = document.querySelector(".btn-next");
const previousButton = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxSlide = slider.length-1;


//Here we have moved the images on X-axis.... such that
//1st image from 0 to 100
//2nd image from 100 to 200
//and so on
slider.forEach((image, index) => image.style.transform = `translateX(${index *100}%)`);
console.log({slider});

function nextButtonClickHandler(event){
    if(currentSlide === maxSlide){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    slider.forEach((image, index)=> image.style.transform = `translate(${(index-currentSlide)*100}%)`)


    // console.log(currentSlide);
}

function previousButtonClickHandler(){
    if(currentSlide === 0){
        currentSlide = maxSlide;
    }else{
        currentSlide--;
    }
    slider.forEach((image, index)=> image.style.transform = `translate(${(slider.forEach((image, index)=> image.style.transform = `translate(${(index-currentSlide)*100}%)`)-currentSlide)*100}%)`)
    // console.log(currentSlide);
}

nextButton.addEventListener("click", nextButtonClickHandler)
previousButton.addEventListener("click", previousButtonClickHandler);