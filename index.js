const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '2023 8 4'

function countdown() {
    const newDate = new Date(newYears);
    const now = new Date();

    const totalSeconds = (newDate - now) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time < 10? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);