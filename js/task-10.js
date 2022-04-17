function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputCreateBoxes = document.querySelector('#controls input');
const btnCreateBoxes = document.querySelector('[data-create]');
const btnDestroyBoxes = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
btnCreateBoxes.addEventListener("click", getAmount);


function getAmount() {
  let amount = Number(inputCreateBoxes.value);
  createBoxes(amount);
}
  
function createBoxes(amount) {
  let firstSize = 30;

  for (let i = 0; i < amount; i += 1) {
    let size = firstSize + i * 10
    const newEl = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    boxes.insertAdjacentHTML("beforeend", newEl);
  }
}

btnDestroyBoxes.addEventListener("click", () => {
  boxes.innerHTML = "";
  })
  
  






// const controls = document.querySelector('#controls');
// const boxes = document.querySelector('#boxes');

// console.log(controls, boxes);


// controls.addEventListener("input", (event) => {
//   console.log(event.currentTarget.value)
// })