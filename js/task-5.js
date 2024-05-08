function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", changeColorClick);

function changeColorClick() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
}
