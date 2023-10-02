
const button = document.querySelector(".dropdown__value")
const dropList = document.querySelector(".dropdown__list")

function clickListItems() {
    dropList.classList.toggle('dropdown__list_active')   
}

function textList(event)  {
    // don't allow link href
    event.preventDefault();
    
    button.textContent = event.target.textContent
    clickListItems()
}

button.addEventListener('click', clickListItems);
dropList.addEventListener('click', textList)
