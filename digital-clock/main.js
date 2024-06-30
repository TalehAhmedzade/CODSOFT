const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
  const currentTime = new Date();
  second.innerHTML = currentTime.getSeconds();
  minute.innerHTML = currentTime.getMinutes();
  hour.innerHTML = currentTime.getHours();
}, 1000);
