const elemPrev = document.querySelector('div.slider__arrow_prev');
const elemNext = document.querySelector('div.slider__arrow_next');

elemPrev.onclick = prev;

elemNext.onclick = next;
const listElemSlider__item = Array.prototype.slice.call(document.querySelectorAll('div.slider__item'));
const lengthSlider = listElemSlider__item.length;

function prev() {
    let currentSlide = listElemSlider__item.findIndex(function (elem) { return elem.classList.contains('slider__item_active'); });
    listElemSlider__item[currentSlide].classList.remove('slider__item_active');
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = lengthSlider - 1;

    }
    listElemSlider__item[currentSlide].classList.add('slider__item_active');
}
function next() {
    let currentSlide = listElemSlider__item.findIndex(function (elem) { return elem.classList.contains('slider__item_active'); });
    listElemSlider__item[currentSlide].classList.remove('slider__item_active');
    currentSlide++;

    if (currentSlide >= lengthSlider) {
        currentSlide = 0;
    }
    listElemSlider__item[currentSlide].classList.add('slider__item_active');
}
