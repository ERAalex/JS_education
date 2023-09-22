const menuLink = document.getElementsByClassName("menu__link")

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = () => {
        let menuItem = menuLink[i].closest(".menu__item").querySelector('.menu_sub')
        if (menuItem != null) {
            
            // check if more that 1 are open
            findElement = Array.from(document.querySelectorAll('.menu_active'))
            menuItem.classList.add("menu_active")
            if (findElement.length > 0) {
                findElement[0].classList.remove("menu_active");
                return false
            }
            return false
        }
    } 
}
