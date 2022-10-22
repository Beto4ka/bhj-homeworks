"use strict"

const productQuantityControl = Array.from(document.getElementsByClassName('product__quantity-control'));
const productAddButton = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = Array.from(document.getElementsByClassName('cart__products'));

function quantityControl(e) {
    e.preventDefault();
    let productQuantityAddToBasket = this.closest('.product__quantity-controls').querySelectorAll('.product__quantity-value');
    let productQuantityAddToBasketNumber = parseInt(productQuantityAddToBasket[0].textContent);
    if (this.classList.contains('product__quantity-control_dec') && productQuantityAddToBasketNumber > 1) {
        productQuantityAddToBasket[0].textContent = productQuantityAddToBasketNumber - 1;
    } else if (this.classList.contains('product__quantity-control_inc')) {
        productQuantityAddToBasket[0].textContent = productQuantityAddToBasketNumber + 1;
    }
}

function addToBasket(e) {
    let productId = (this.closest('.product')).dataset.id;
    let productsInBasket = (Array.from(document.getElementsByClassName('cart__product')));
    let productCountAdd = parseInt((this.closest('.product').querySelectorAll('.product__quantity-value'))[0].textContent);

    if (productsInBasket.some(item => item.dataset.id === productId)) {
        productsInBasket.forEach(item => {
            if (item.dataset.id === productId) {
                let productCountInBasket = item.querySelectorAll('.cart__product-count');
                productCountInBasket[0].textContent = parseInt(productCountInBasket[0].textContent) + productCountAdd;
            }
        })
    } else {
        let productImage = (this.closest('.product').querySelectorAll('.product__image'))[0].src;
        let cartProduct = `
			<div class="cart__product" data-id="${productId}">
				<img class="cart__product-image" src="${productImage}">
				<div class="cart__product-count">${productCountAdd}</div>
			</div>`
        cartProducts[0].insertAdjacentHTML('beforeEnd', cartProduct);
    }
}

productQuantityControl.forEach(item => item.addEventListener('click', quantityControl));
productAddButton.forEach(item => item.addEventListener('click', addToBasket));