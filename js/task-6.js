function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', (event) => {
  const amount = parseInt(input.value);
  
  if (amount < 1 || amount > 100) {
  return;
}
destroyBoxes();
createBoxes(amount);
input.value = '';
});

destroyBtn.addEventListener('click', (event) => {
destroyBoxes();
});

function createBoxes(amount) {
const fragment = document.createDocumentFragment();

for (let i = 0; i < amount; i++) {
const box = document.createElement('div');
box.style.width = `${30 + i * 10}px`;
box.style.height = `${30 + i * 10}px`;
box.style.backgroundColor = getRandomHexColor();
fragment.appendChild(box);
}

boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
boxesContainer.innerHTML = '';
}
