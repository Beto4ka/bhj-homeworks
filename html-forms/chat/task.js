"use strict"

const chatWidget = document.getElementsByClassName('chat-widget');
const chatWidgetArea = document.getElementsByClassName('chat-widget__area');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const robotAnswersList = [
    'Ну привет!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Добрый день! До свидания!',
    'Кто ты?',
    'Нам все равно. Что ты хочешь?',
    'К сожалению, все операторы заняты. Напишите нам через 10 лет',
    'Даже не знаю, что тебе ответить',
];

chatWidget[0].addEventListener('click', function () {
    this.classList.add('chat-widget_active')
});

function showHoursMinutes(input) {
    let hours = input.getHours()
    let minutes = input.getMinutes()
    if (input.getHours() < 10) {
        hours = `0${input.getHours()}`
    }
    if (input.getMinutes() < 10) {
        minutes = `0${input.getMinutes()}`
    }
    return `${hours}:${minutes}`
}

function robotAnswer() {
    let date = new Date;
    messages.innerHTML += `
		<div class="message">
			<div class="message__time">${showHoursMinutes(date)}</div>
			<div class="message__text">
				${robotAnswersList[(Math.floor(Math.random() * Math.floor(robotAnswersList.length)))]}
			</div>
		</div>
	`;
}

function addMessage() {
    let date = new Date;
    messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${showHoursMinutes(date)}</div>
			<div class="message__text">
				${chatWidgetInput.value}
			</div>
		</div>
	`;
    robotAnswer();
    chatWidgetInput.value = '';
    messages.scrollIntoView(false);
}



function proactiveQuestionBlank() {
    setInterval(() => {
        if (chatWidgetInput.value === '') {
            let date = new Date;
            messages.innerHTML += `
				<div class="message">
					<div class="message__time">${showHoursMinutes(date)}</div>
					<div class="message__text">
						Ну ты долго там еще думать будешь?
					</div>
				</div>
			`;
            messages.scrollIntoView(false);
        }
    }, 30000)
}

function proactiveQuestionInprocess() {
    let initialInput = chatWidgetInput.value;
    setInterval(() => {
        if (chatWidgetInput.value === initialInput) {
            let date = new Date;
            messages.innerHTML += `
				<div class="message">
					<div class="message__time">${showHoursMinutes(date)}</div>
					<div class="message__text">
						Формулируй вопрос быстрее!
					</div>
				</div>
			`;
            messages.scrollIntoView(false);
        }
    }, 30000)
}

chatWidgetInput.addEventListener('change', addMessage);
chatWidgetInput.addEventListener('focus', proactiveQuestionBlank);
chatWidgetInput.addEventListener('input', proactiveQuestionInprocess);
