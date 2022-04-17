const textControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

textControl.addEventListener("change", (event) => {
    // console.log(event.currentTarget.value);
    text.style.fontSize = event.currentTarget.value+'px'
})