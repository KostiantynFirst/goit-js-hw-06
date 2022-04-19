
const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    const emailForm = email.value;
    const passwordForm = password.value;

    
    if (emailForm === "" || passwordForm === "") {
        alert("Вы не заполнили все поля")
    } else {  
   
        const formData = {
            emailForm,
            passwordForm
        }
        console.log(formData);
    }
        
    event.currentTarget.reset();

}