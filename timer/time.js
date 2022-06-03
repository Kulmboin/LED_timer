const clock = document.getElementById('clock');

function getClock() {
    const date = new Date();
    let hour = String(date.getHours()).padStart(2, '0');
    let min = String(date.getMinutes()).padStart(2, '0');
    let sec = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hour}:${min}:${sec}`
}

getClock();
setInterval(getClock, 1000)