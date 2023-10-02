const fontSizeList = Array.from(document.querySelectorAll(".font-size"))
const bookContent = document.querySelector(".book__content")


fontSizeList.forEach((item) => {
    // add to each item in list _event
    item.addEventListener('click', (event) => {

        const activeLetters = fontSizeList.find(item => item.className.includes("font-size_active"))
        event.preventDefault()
        activeLetters.classList.remove("font-size_active")
        item.classList.add("font-size_active")

        // change text - remove old class, add new one
        if (item.className.includes('font-size_small')) {
            bookContent.classList.remove("book_fs-big")
            bookContent.classList.add("book_fs-small")
        } else if (item.className.includes('font-size_big')) {
            bookContent.classList.remove("book_fs-small")
            bookContent.classList.add("book_fs-big")
        } else {
        // remove all class
            bookContent.className = ""
        }
    })
})