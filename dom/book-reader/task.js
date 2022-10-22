"use strict"

const fontSizes = Array.from(document.getElementsByClassName('font-size'));
const color = Array.from(document.getElementsByClassName('color'));
const book = document.getElementById('book');

function fontSizeAction(e) {
    e.preventDefault()
    fontSizes.forEach(item => {
        item.classList.remove('font-size_active')
    })
    this.classList.add('font-size_active');
    book.classList.remove('book_fs-big', 'book_fs-small');
    if (this.dataset.size !== undefined) {
        book.classList.add(`book_fs-${this.dataset.size}`)
    }
}

function colorAction(e) {
    e.preventDefault();
    Array.from(this.closest('.book__control').children).forEach(item => item.classList.remove('color_active'));
    this.classList.add('color_active');
    if (this.closest('.book__control').matches('.book__control_color')) {
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${this.dataset.textColor}`);
    } else if (this.closest('.book__control').matches('.book__control_background')) {
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${this.dataset.bgColor}`);
    }
}


fontSizes.forEach(item => item.addEventListener('click', fontSizeAction));
color.forEach(item => item.addEventListener('click', colorAction));