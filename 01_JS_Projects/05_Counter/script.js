const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const counter = document.getElementById("count");
const reset = document.getElementById("reset");

let intervalId;
let count = 0;

const startId = () => {
    intervalId = setInterval(() => {
    counter.innerHTML = `${count++}`;
    }, 1000);
};

startButton.addEventListener("click", startId);

stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
});

reset.addEventListener("click", () => {
    count = 0;
    clearInterval(intervalId)
    counter.innerHTML = `${count}`;
});