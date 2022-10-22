const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.find(item => {
    let menuSub = item.closest('.menu__item').querySelector('.menu_sub');

    if (menuSub) {
        item.onclick = () => {

            if (menuSub.className.includes('menu_active')) {
                menuSub.classList.remove('menu_active');
            } else if (document.querySelector('.menu_active')) {
                document.querySelector('.menu_active').classList.remove('menu_active');
                menuSub.classList.add('menu_active');
            } else {
                menuSub.classList.add('menu_active');
            }

            return false;
        }
    }

})