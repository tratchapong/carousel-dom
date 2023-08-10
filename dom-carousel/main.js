let slide = document.querySelector('.slides')
let nextBtn = document.querySelector('.next-button')
let backBtn = document.querySelector('.back-button')
let autoSlide = document.querySelector('.auto-slide')
let current = 0
let numSlide = 4
let autoNext


nextBtn.addEventListener('click', () => {
    current = current === numSlide-1 ? 0 : current+1
    let currentSlide = current * -100
    slide.style.left = `${currentSlide}%`   
})
backBtn.addEventListener('click', () => {
    current = current === 0 ? numSlide-1 : current-1
    let currentSlide = current * -100
    slide.style.left = `${currentSlide}%`   
})

autoSlide.addEventListener('change', () => {
    console.log(autoSlide.checked)
    if(autoSlide.checked) 
        autoNext = setInterval(()=>nextBtn.click(), 2000)
    else 
        clearInterval(autoNext)
})

