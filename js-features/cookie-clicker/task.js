
let img = document.getElementById('cookie')
let clickCount = document.getElementById('clicker__counter')
let clickTime = document.getElementById('clicker__time')
imgOriginalWidth = img.width

timeStamp = Date.now() / 1000;;

img.onclick = () => {
    if (img.width != imgOriginalWidth) {
        img.width -= 20
        img.height -= 20
        clickCount.textContent = Number(clickCount.textContent) + 1

        timeOnClick = Date.now() / 1000;
        timeDifference = timeOnClick - timeStamp
        clickTime.textContent = parseFloat((1 / timeDifference).toFixed(2))
        timeStamp = timeOnClick


    } else {
        img.width += 20
        img.height += 20
        clickCount.textContent = Number(clickCount.textContent) + 1

        timeOnClick = Date.now() / 1000;
        timeDifference = timeOnClick - timeStamp
        clickTime.textContent = parseFloat((1 / timeDifference).toFixed(2))
        timeStamp = timeOnClick

    }
}


