const tab = Array.from(document.querySelectorAll(".tab"))
const tabCont = Array.from(document.querySelectorAll(".tab__content"))

for (let i = 0; i < tab.length; i++) {

    tab[i].addEventListener("click", function () {

        // first - add active class
        if (tab[i].className.includes("tab_active")) {
            tab[i].classList.remove("tab_active")
        } 
        else {
            // check if one more have active class
            for (let tabItem of tab){
                if (tabItem.className.includes("tab_active")) {
                    tabItem.classList.remove("tab_active")
                }
            }
            tab[i].classList.add("tab_active")
        }

        // second - change content
        if (tabCont[i].className.includes("tab__content_active")) {
            tabCont[i].className.remove("tab__content_active")
        } else {
            for (let tabContItem of tabCont) {
                if (tabContItem.className.includes("tab__content_active")) {
                    tabContItem.classList.remove("tab__content_active")
                }
                tabCont[i].classList.add("tab__content_active")
            }
        } 
    })
}
