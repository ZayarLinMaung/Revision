const openBtn = document.querySelector(".openBtn");
const open = openBtn.addEventListener("click", function () {
  document.querySelector(".cover").style.opacity = "1";
  document.querySelector(".cover").style.visibility = "visible";
  document.querySelector(".box").style.opacity = "1";
  document.querySelector(".box").style.visibility = "visible";
});
const closeBtn = document.querySelector(".closeBtn");
const close = closeBtn.addEventListener("click", function () {
  document.querySelector(".cover").style.opacity = "0";
  document.querySelector(".cover").style.visibility = "hidden";
  document.querySelector(".box").style.opacity = "0";
  document.querySelector(".box").style.visibility = "hidden";
});
const cover = document.querySelector(".cover");
cover.addEventListener("click", function (event) {
  document.querySelector(".cover").style.opacity = "0";
  document.querySelector(".cover").style.visibility = "hidden";
  document.querySelector(".box").style.opacity = "0";
  document.querySelector(".box").style.visibility = "hidden";
});
