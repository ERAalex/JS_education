let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))


setInterval(() => {
    // find active rotator
    let activeElement = rotatorCase.findIndex(item => item.className.includes("rotator__case_active"))


    rotatorCase[activeElement].classList.remove("rotator__case_active")

    activeElement++
    rotatorCase[activeElement].classList.add("rotator__case_active")
    rotatorCase[activeElement].style.color = rotatorCase[activeElement].dataset.color;


    if (activeElement === (rotatorCase.length - 1)) {
        rotatorCase[activeElement].classList.remove("rotator__case_active")
        activeElement = 0;
        rotatorCase[activeElement].classList.add("rotator__case_active")
        
    }
}, 1000)
