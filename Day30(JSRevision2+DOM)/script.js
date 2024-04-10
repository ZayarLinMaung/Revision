const container = document.querySelector(".container");
const toggleBtn = document.querySelector(".togglebtn");
toggleBtn.addEventListener("click", function () {
  if (container.style.display == "none") {
    container.style.display = "flex";
  } else {
    container.style.display = "none";
  }
});
