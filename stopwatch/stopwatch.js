const time = document.querySelector("#time");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let counter = 0;
let flag = true;
let interval;

startBtn.addEventListener("click", () => {
    if (flag) {
        flag = false;
        interval = setInterval(update, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    if (!flag) {
        flag = true;
        clearInterval(interval);
    }
});

resetBtn.addEventListener("click", reset);

function update() {
    counter += 1;
    seconds = counter % 60;
    minutes = Math.floor(counter / 60) % 60;
    hours = Math.floor(counter / 3600);

    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);

    time.textContent = hours + ":" + minutes + ":" + seconds;
}

function reset() {
    flag = true;
    counter = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(interval);

    time.textContent = "00:00:00";
}

function pad(unit) {
    unit = unit.toString();
    if (unit.length < 2) {
        return ("0" + unit);
    }
    else return unit;
}