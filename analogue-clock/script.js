// const secHand = document.querySelector("#sec-hand");
const secHand = document.getElementById("sec-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");
/* const angle = Math.random() * 360;
secHand.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
minHand.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
hourHand.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`; */

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const timeDelay = 6; // 360 degrees / 60 seconds = 6
  const hourDelay = 30; // 360 degrees / 12 hours = 30

  secHand.style.transform = `translate(-50%, -100%) rotate(${
    seconds * timeDelay
  }deg)`;
  minHand.style.transform = `translate(-50%, -100%) rotate(${
    minutes * timeDelay + seconds / 10
  }deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${
    hours * hourDelay + minutes / 2
  }deg)`;
}

setInterval(getTime, 100);
