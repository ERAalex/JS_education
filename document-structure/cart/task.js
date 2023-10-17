
const productMin = Array.from(document.querySelectorAll(".product__quantity-control_dec"))
const productMax = Array.from(document.querySelectorAll(".product__quantity-control_inc"))
const productQuantity = Array.from(document.querySelectorAll(".product__quantity-value"))

const product = document.querySelector(".product__quantity-controls")
const productAddButton = Array.from(document.querySelectorAll(".product__add"))
const productDeleteButton = Array.from(document.querySelectorAll(".product__delete"))


const cartProducts = document.querySelector(".cart__products")
const productImage = document.querySelectorAll(".product__image")


// quit items -
for (let i = 0; i < productMin.length; i++) {
    productMin[i].addEventListener("click", () => {
        let quantity = productQuantity[i].textContent
        if (quantity > 1) {
            quantity--
            productQuantity[i].textContent = quantity
        }
    })
}

// add items +
for (let i = 0; i < productMax.length; i++) {
    productMax[i].addEventListener("click", () => {
        let quantity = productQuantity[i].textContent
        quantity++
        productQuantity[i].textContent = quantity
    })
}



// on click add-button
for (let i = 0; i < productAddButton.length; i++) {
    productAddButton[i].addEventListener("click", () => {

        let children = Array.from(cartProducts.children)
        let attr = productAddButton[i].closest(".product").getAttribute("data-id")
        let src = productImage[i].getAttribute("src")
        let indx = children.findIndex(e => e.getAttribute("data-id") === attr)

        if (indx != -1) {
            const cartProductCount = Array.from(document.querySelectorAll(".cart__product-count"))
            cartProductCount[indx].textContent = parseInt(cartProductCount[indx].textContent) + parseInt(productQuantity[i].textContent)
        }
        else {
            cartProducts.innerHTML += `<div class="cart__product" data-id="${attr}">
        <img class="cart__product-image" src="${src}">
        <div class="cart__product-count">${productQuantity[i].textContent}</div></div>`
        }
    })
}


// on click delete-button
for (let i = 0; i < productDeleteButton.length; i++) {
    productDeleteButton[i].addEventListener("click", () => {

        let children = Array.from(cartProducts.children)
        let attr = productDeleteButton[i].closest(".product").getAttribute("data-id")
        let src = productImage[i].getAttribute("src")
        let indx = children.findIndex(e => e.getAttribute("data-id") === attr)
    

        if (indx != -1) {
            const cartProductCount = Array.from(document.querySelectorAll(".cart__product-count"))

            if (parseInt(cartProductCount[indx].textContent) < parseInt(productQuantity[i].textContent)){
                
                // let's find element in cart_products and delete it
                const parent = document.querySelector('.cart__products');
                const child1 = parent.querySelector(`[data-id="${attr}"]`);

                child1.remove()

                
            } else if (parseInt(cartProductCount[indx].textContent) === '0') {

            }
            
            else {
                cartProductCount[indx].textContent = parseInt(cartProductCount[indx].textContent) - parseInt(productQuantity[i].textContent)
            }
        }

    })
}


