let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("number-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

const validateName = () => {
    let name = document.getElementById("contactName").value;

    if(name.length == 0){
        nameError.innerHTML = "name is required"
        return false
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full name"
        return false
    }

    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true
}

const validatePhone = () => {
    let phone = document.getElementById("contactPhone").value;

    if(phone.length == 0){
        phoneError.innerHTML = `phone no is required`
        return false
    }

    if(phone.length !== 11){
        phoneError.innerHTML = `phone no should be 10 digits`
        return false
    }

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = `only digits please`
        return false
    }

    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true

}

const validateEmail = () => {
    let email = document.getElementById("contactEmail").value;

    if(email.length == 0){
        emailError.innerHTML = `Email is required`
        return false
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = `Email is invalid`
        return false
    }

    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true 
}

const validateMessage = () => {
    let message = document.getElementById("contactMsg").value;
    let required = 30;
    let left = required - message.length;

    if(left > 0){
        msgError.innerHTML = left + " more characters required"
        return false
    }
    msgError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true

}

const validateForm = () => {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block"
        submitError.innerHTML = `please fix error to submit`
        setTimeout(() => {
            submitError.style.display = "none"
        },3000)
        return false
    }
}