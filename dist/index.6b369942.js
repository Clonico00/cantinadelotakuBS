const sliderHolder = document.querySelector(".slider__holder");
const sliderItems = document.querySelectorAll(".slider__item");
const bullets = document.querySelectorAll(".bullets__item");
let currentIndex = 0;
function moveTo(index) {
    if (index < 0 || index >= sliderItems.length || index === currentIndex) return;
    sliderHolder.style.transform = `translateX(-${index * 25}%)`;
    bullets[currentIndex].classList.remove("active");
    bullets[index].classList.add("active");
    currentIndex = index;
}
bullets.forEach((bullet, index)=>{
    bullet.addEventListener("click", ()=>{
        moveTo(index);
    });
});
setInterval(()=>{
    let newIndex = currentIndex + 1;
    if (newIndex >= sliderItems.length) newIndex = 0;
    moveTo(newIndex);
}, 7000);

//# sourceMappingURL=index.6b369942.js.map
