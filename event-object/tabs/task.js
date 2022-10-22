const tab = Array.from(document.querySelectorAll('.tab'));

tab.find((item, index) => {
    item.addEventListener('click', () => {
        item.closest('.tabs').querySelector('.tab_active').classList.remove('tab_active');
        item.closest('.tabs').querySelector('.tab__content_active').classList.remove('tab__content_active');
        item.classList.add('tab_active');
        item.closest('.tabs').querySelectorAll('.tab__content')[index].classList.add('tab__content_active');
    })
})