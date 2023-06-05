const timerDisplay = document.querySelector('.timer__display');
const timerPlay = document.querySelector('.timer__play');
const timerPause = document.querySelector('.timer__pause');
const timerReset = document.querySelector('.timer__reset');
const timerStop = document.querySelector('.timer__stop');
const timerReverse = document.querySelector('.timer__reverse');
const delayInput = document.querySelector('.delay__input');

let timer;
let delay = 1000;
let timerStatusForReverse = true;

let timerGo = function(event) {
    clearTimeout(timer);
    timer = setTimeout(
        function tick() {
            timerStatusForReverse ? Number(timerDisplay.textContent++) : Number(timerDisplay.textContent--);
            timer = setTimeout(tick, delay);
        }, delay
    );                         
};

let stopTimer = function(event) {
    clearTimeout(timer);
    timerDisplay.textContent = 0;
};

timerPlay.addEventListener("click", timerGo);
timerPause.addEventListener("click", () =>  clearTimeout(timer));
timerReset.addEventListener("click", () => timerDisplay.textContent = 0);
timerStop.addEventListener("click", stopTimer);
timerReverse.addEventListener("click", () => timerStatusForReverse = !timerStatusForReverse);
delayInput.addEventListener("change", () => delay = Number(delayInput.value));

