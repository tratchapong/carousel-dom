let slide = document.querySelector('.slides')
let nextBtn = document.querySelector('.next-button')
let current = 0
let numSlide = 4

nextBtn.addEventListener('click', () => {
    current = current === numSlide-1 ? 0 : current+1
    let currentSlide = current * -100
    slide.style.left = `${currentSlide}%`   
})