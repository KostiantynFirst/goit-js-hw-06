const enterName = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

enterName.addEventListener('input', (event) => {
    if (event.currentTarget.value) {
        nameOutput.textContent = event.currentTarget.value;
    } else {
        nameOutput.textContent = "Anonymous";
    }
});