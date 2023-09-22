const sliderNext = document.querySelector(".slider__arrow_next")
const sliderPrev = document.querySelector(".slider__arrow_prev")
const sliderItems = Array.from(document.getElementsByClassName("slider__item"))


sliderPrev.onclick = () => {
    let countActive
    countActive = sliderItems.findIndex(item => item.className.includes("slider__item_active"))
    sliderItems[countActive].classList.remove("slider__item_active")
    countActive--

    if (countActive === -1) {
        countActive = sliderItems.length - 1
    }
    sliderItems[countActive].classList.add("slider__item_active")
}

sliderNext.onclick = () => {
    let countActive
    countActive = sliderItems.findIndex(item => item.className.includes("slider__item_active"))
    sliderItems[countActive].classList.remove("slider__item_active")
    countActive++

    if (countActive === sliderItems.length) {
        countActive = 0
    }
    sliderItems[countActive].classList.add("slider__item_active")
}


// Old code
// sliderPrev.onclick = () => {
//     let countActive
//     countActive = sliderItems.findIndex(item => item.className.includes("slider__item_active"))
//     sliderItems[countActive].classList.remove("slider__item_active")
//     countActive++
//     console.log(countActive)

//     if (countActive === sliderItems.length) {
//         countActive = 0
//     }
//     sliderItems[countActive].classList.add("slider__item_active")
// }

// sliderNext.onclick = () => {
//     let countActive
//     countActive = sliderItems.findIndex(item => item.className.includes("slider__item_active"))
//     sliderItems[countActive].classList.remove("slider__item_active")
//     countActive--
//     if (countActive === -1) {
//         countActive = sliderItems.length - 1
//     }
//     sliderItems[countActive].classList.add("slider__item_active")
// }
