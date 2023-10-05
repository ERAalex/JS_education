const interestCheck = Array.from(document.querySelectorAll(".interest__check"))

for (let item of interestCheck) {
    let mainCheck = item.closest('.interest')
    const interestArray = Array.from(mainCheck.querySelectorAll('.interest__check'));

    if (item.closest(".interests_active") === null) {
        item.addEventListener("change", () => {
            if (item.checked === true) {
                interestArray.forEach(el => {
                    el.checked = true
                })
            } else {
                interestArray.forEach(el => {
                    el.checked = false
                })             
            }
        })
    }
}