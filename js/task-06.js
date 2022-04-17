const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        console.log('true');
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        (console.log('false'))
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    } 
});