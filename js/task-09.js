function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const backgroundColor = document.querySelector('.color');
const changeBackgroundColor = document.querySelector('.change-color');


changeBackgroundColor.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();

  const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  backgroundColor.textContent = randomColor;
  // console.log(getRandomHexColor());
}