
let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let hours = document.getElementById('hours')

setInterval(() => {
    if (seconds.textContent > 10) {
        seconds.textContent = Number(seconds.textContent) - 1
    } else {
        seconds.textContent = "0" + (Number(seconds.textContent) - 1)
    }
    
    if (seconds.textContent == 0 ) {
        if (minutes.textContent == 0) {
            if (hours.textContent == 0){
                alert('Вы победили в конкурсе!');

            }
            if (hours.textContent > 11) {
                minutes.textContent = 59
                hours.textContent -= 1
            } else {
                hours.textContent = "0" + (hours.textContent - 1)
                minutes.textContent = 59
            }
            seconds.textContent = 59
        } else {
            if (minutes.textContent > 11) {
                minutes.textContent = minutes.textContent - 1
                seconds.textContent = 59
            } else {
                minutes.textContent = "0" + (minutes.textContent - 1)
            seconds.textContent = 59
            }
        }
    }

}, 1000
)
