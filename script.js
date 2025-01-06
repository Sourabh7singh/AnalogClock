const seconds = document.getElementById("second-hand");
const minutes = document.getElementById("minute-hand")
const hour = document.getElementById("hour-hand");
function RunClock(){
    const date = new Date();
    let sec_rotate = date.getSeconds() + date.getMilliseconds()/1000;
    let min_rotate = sec_rotate/60 + date.getMinutes();
    let hour_rotate = min_rotate/60 +date.getHours();
    seconds.style.setProperty('--rotate',sec_rotate*6);
    minutes.style.setProperty('--rotate',min_rotate*6);
    hour.style.setProperty('--rotate',hour_rotate*30);
}

function startClock() {
    RunClock();
    requestAnimationFrame(startClock);
}

startClock();