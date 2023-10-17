const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"))
const toolTip = document.createElement("div")
toolTip.classList.add("tooltip")

for (let item of hasTooltip) {
    item.addEventListener("click", (event) => {
        // find position to give it to our toolTip, after click
        event.preventDefault()
        
        let newText = item.getAttribute("title")
        let position = item.getBoundingClientRect()

        check = document.querySelector('.tooltip_active')
        if (check != null) {
            check.textContent = newText

            check.style.top = position.bottom + 'px';
            check.style.left = position.left + 'px';

        } else {
        
            item.insertAdjacentElement("afterend", toolTip)
            toolTip.textContent = newText
            toolTip.classList.toggle("tooltip_active")
    
            toolTip.style.top = position.bottom + 'px';
            toolTip.style.left = position.left + 'px';

        }
    })
}
