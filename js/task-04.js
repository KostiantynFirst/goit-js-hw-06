const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueCounter = document.querySelector('#value');

let counterValue  = 0;

btnIncrement.addEventListener("click", (event) => {
    event.preventDefault();
    counterValue  += 1;
    valueCounter.textContent = counterValue ;
})

btnDecrement.addEventListener("click", (event) => {
    event.preventDefault();
    counterValue  -= 1;
    valueCounter.textContent = counterValue ;
})


