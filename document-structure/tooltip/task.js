"use strict"

const tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
let activeTip;

function addTooltip(item) {
    let tip = `<div class="tooltip">
      ${item.title}
    </div>`
    return tip;
}

tooltips.forEach(item => item.insertAdjacentHTML('beforeEnd', addTooltip(item)))

function showHideTooltip(e) {
    e.preventDefault();
    let tipToChange = this.querySelectorAll('.tooltip')[0];
    if (activeTip != undefined) {
        if (tipToChange.textContent != activeTip.textContent) {
            activeTip.classList.remove('tooltip_active');
        }
    }
    tipToChange.classList.toggle('tooltip_active');
    tipToChange.style = `margin-left: ${this.getBoundingClientRect().left}px;`;
    activeTip = tipToChange;
    return activeTip;
}

tooltips.forEach(item => item.addEventListener('click', showHideTooltip));