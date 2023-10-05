const chatStartWidget = document.querySelector(".chat-widget")
const chatWidgetSide = document.querySelector(".chat-widget__side")
const chatWidgetInput = document.querySelector(".chat-widget__input")
const chatWidgetMessages = document.querySelector(".chat-widget__messages")
let messageText = ''

const messagesResponse = [
    "Вы мне уже надоели",
    "Я сижу на обычной зарплате для решения таких вопросов",
    "Чуть позже",
    "Нет, реально я не знаю ответа",
    "Вам ответит первый освободившийся оператор"
];

function randomMessage(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function areYouStillAlive() {
    console.log('alive')
    setTimeout(function(){
        chatWidgetMessages.innerHTML += `<div class="message">
        <div class="message__text">Вы тут? вы живы?</div></div>`
    }, 30000);
}

chatStartWidget.addEventListener("click", () => {
    chatStartWidget.classList.add("chat-widget_active");
    areYouStillAlive()
})


chatWidgetInput.addEventListener("keydown", (e) => {

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let someResponse = randomMessage(1,4)

    let checkKey = ''
    checkKey = e.key

    // don't allow to add names like 'Enter', 'Backspace'...
    if (checkKey.length === 1 ){
        messageText += e.key
    }

    if (e.key === "Enter") {
        if (messageText === '') {
        } else {
            messageText = ''

            chatWidgetMessages.innerHTML += `<div class="message message_client">
            <div class="message__time">${date}</div>
            <div class="message__text">${chatWidgetInput.value}</div></div>
            <div class="message__text">${messagesResponse[someResponse]}</div></div>`
            chatWidgetInput.value = ''

            areYouStillAlive()

        }
    }
})
