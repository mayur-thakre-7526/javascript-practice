const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.id;
    body.style.backgroundColor = color;
  });
});
