const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"))
const toolTip = document.createElement("div")
toolTip.classList.add("tooltip")

for (let item of hasTooltip) {
    item.addEventListener("click", (event) => {
        // find position to give it to our toolTip, after click
        let position = item.getBoundingClientRect()

        event.preventDefault()
        item.insertAdjacentElement("afterend", toolTip)
        let newText = item.getAttribute("title")
        toolTip.textContent = newText
        toolTip.classList.toggle("tooltip_active")

        toolTip.style.top = position.bottom + 'px';
        toolTip.style.left = position.left + 'px';
    })
}

