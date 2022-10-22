const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.find((item, index) => {
    item.onclick = () => {
        if (item.closest('.dropdown').querySelector('.dropdown__list_active')) {
            dropdownList[index].classList.remove('dropdown__list_active');
        } else if (document.querySelector('.dropdown__list_active')) {
            document.querySelector('.dropdown__list_active').classList.remove('dropdown__list_active');
            dropdownList[index].classList.add('dropdown__list_active');
        } else {
            dropdownList[index].classList.add('dropdown__list_active');
        }
    }
})

dropdownLink.find(item => {
    item.onclick = () => {
        item.closest('.dropdown').querySelector('.dropdown__value').textContent = item.textContent;
        item.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        return false;
    }
})
