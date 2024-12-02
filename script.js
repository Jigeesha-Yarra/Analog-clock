const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.min');
const secHand = document.querySelector('.sec');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secDegrees = ((seconds/60)*360) + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();
    const minDegrees = ((minutes/60)*360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate,1000);
setDate();
