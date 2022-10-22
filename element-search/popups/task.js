const modal = document.querySelector('#modal_main');
const modalClose = modal.querySelector('.modal__close');
const modalSuccess = document.querySelector('#modal_success');
const showSuccess = document.querySelector('.show-success');
const successClose = document.querySelector('#modal_success .modal__close');

modal.classList.add('modal_active');

showSuccess.onclick = () => {
    modal.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

modalClose.onclick = () => modal.classList.remove('modal_active');

successClose.onclick = () => {
    modalSuccess.classList.remove('modal_active');
}