
const modalMain = document.getElementById('modal_main')
modalMain.classList.add('modal_active')

const closeBotton = Array.from(document.querySelectorAll('.modal__close'))
const showSuccess = document.querySelector('.show-success')
const modalSuccess = document.getElementById('modal_success')

console.log(modalSuccess)

closeBotton.onclick = function (element) {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.remove('modal_active');
}


for (let i = 0; i < closeBotton.length; i++) {
    closeBotton[i].onclick = function () {
        if (modalMain.className.includes('modal_active')) {
            modalMain.classList.remove('modal_active')
            modalSuccess.classList.add('modal_active')
        } else {
            modalSuccess.classList.remove('modal_active')
        }

    }
}

showSuccess.onclick = function (element) {
    modalMain.classList.remove('modal_active')
    modalSuccess.classList.add('modal_active');
}
