const timerDisplay = document.querySelector('.timer__display');
const timerPlay = document.querySelector('.timer__play');
const timerPause = document.querySelector('.timer__pause');
const timerReset = document.querySelector('.timer__reset');
const timerStop = document.querySelector('.timer__stop');
const timerReverse = document.querySelector('.timer__reverse');
const delayInput = document.querySelector('.delay__input');

let timer;
let delay = 1000;

let timerGo = function(event) {
    timer = setTimeout(
        function tick() {
            timerDisplay.textContent++;
            timer = setTimeout(tick, delay);
        }, delay
    );       
};

let stopTimer = function(event) {
    clearTimeout(timer);
    timerDisplay.textContent = 0;
};

let reverseTimer = function(event) {
    clearTimeout(timer);
    timer = setTimeout(
        function tick() {
            if (timerDisplay.textContent > 0 ) {
                timerDisplay.textContent--;
                timer = setTimeout(tick, delay);        
            }
        }, delay
    );  
};

timerPlay.addEventListener("click", timerGo);
timerPause.addEventListener("click", () =>  clearTimeout(timer));
timerReset.addEventListener("click", () => timerDisplay.textContent = 0);
timerStop.addEventListener("click", stopTimer);
timerReverse.addEventListener("click", reverseTimer);
delayInput.addEventListener("change", () => delay = delayInput.value);