let deadHole = document.getElementById("dead")
let lostHole = document.getElementById("lost")

for (let i = 1; i < 10; i++) {
    let activeHole = document.getElementById("hole" + i)

    activeHole.onclick = () => {
        if (activeHole.className.includes('hole_has-mole')) {
            deadHole.textContent = Number(deadHole.textContent) + 1
                
            
            if (deadHole.textContent === '5') {
                alert("Вы выиграли")
                location.reload()
            }

        } else {
            lostHole.textContent = Number(lostHole.textContent) + 1
            
            console.log(lostHole.textContent)
            if (lostHole.textContent === '5') {
                alert("Вы проиграли")
                location.reload()
            }
        }
    }
}