"use strict"

const toRevealArray = Array.from(document.getElementsByClassName('reveal'));

function toReveal() {
    toRevealArray.forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight && item.getBoundingClientRect().bottom > 0) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active')
        }
    })
}

window.addEventListener('scroll', toReveal)
