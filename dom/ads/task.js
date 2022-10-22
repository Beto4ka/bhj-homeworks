"use strict"

const rotatorsCases = Array.from(document.getElementsByClassName('rotator__case'));

function changeActive() {
    let activeElements = Array.from(document.getElementsByClassName('rotator__case_active'));
    activeElements.forEach(item => {
        let rotator = Array.from(item.closest('.rotator').children);
        let activeIndex = rotator.indexOf(item);
        if (activeIndex >= (rotator.length - 1)) {
            item.classList.remove('rotator__case_active')
            rotator[0].classList.add('rotator__case_active');
            rotator[0].style.color = rotator[0].dataset.color;
        } else {
            item.classList.remove('rotator__case_active')
            rotator[activeIndex + 1].classList.add('rotator__case_active');
            rotator[activeIndex + 1].style.color = rotator[activeIndex + 1].dataset.color;
        }
    })
}

setInterval(changeActive, 1000)