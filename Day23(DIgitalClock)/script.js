function updateClock() {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString();
  document.querySelector(".clockdisplay").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
