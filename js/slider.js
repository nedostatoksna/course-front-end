const sliderBtnGroup = document.querySelectorAll(".slider-radio"),
      applicationCardsGroup = document.querySelectorAll(".application-card");

let moveSlide = function(event) {
    let slides = Array.from(applicationCardsGroup);
    slides.forEach(item => item.classList.remove("active-card"));

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        if (slide.dataset.id === event.target.id) {
            slide.classList.add("active-card"); 
        }
    }
};     

sliderBtnGroup.forEach(item => item.addEventListener("click", moveSlide));
