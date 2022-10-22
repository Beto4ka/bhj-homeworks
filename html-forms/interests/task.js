"use strict"

const interestCheck = Array.from(document.getElementsByClassName('interest__check'));

function markChekedSubcetegory() {
    if (this.parentElement.nextElementSibling === null) {
        let relatedCategories = Array.from(this.closest('ul.interests_active').querySelectorAll('input'));
        let parentCategory = this.closest('ul.interests_active').previousElementSibling.querySelectorAll('input')
        if (relatedCategories.every(item => item.checked === true)) {
            parentCategory[0].checked = true;
            parentCategory[0].indeterminate = false;
        } else if (relatedCategories.every(item => item.checked !== true)) {
            parentCategory[0].checked = false;
            parentCategory[0].indeterminate = false;
        } else {
            parentCategory[0].indeterminate = true;
        }
    } else {
        let subCategories = Array.from(this.parentElement.nextElementSibling.querySelectorAll('input'));
        if (this.checked === true) {
            subCategories.forEach(item => item.checked = true)
        } else {
            subCategories.forEach(item => item.checked = false)
        }
    }
}

interestCheck.forEach(item => item.addEventListener('change', markChekedSubcetegory))