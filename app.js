const daysEl = document.querySelector(".days-num");
const hoursEl = document.querySelector(".hours-num");
const minsEl = document.querySelector(".mins-num");
const secsEl = document.querySelector(".secs-num");

countDown();

var finalDate = "1 Jan 2022";

function countDown() {
    const lastDate = new Date(finalDate);
    const currentDate = new Date();

    const totalSecs = (lastDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24);

    const hours = Math.floor(totalSecs / 3600) % 24;

    const mins = Math.floor(totalSecs / 60) % 60;

    const secs = Math.floor(totalSecs) % 60;



    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;


}
countDown();
setInterval(countDown, 1000)