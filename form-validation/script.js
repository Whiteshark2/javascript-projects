const form=document.getElementById('form')
const password=document.getElementById('password')
const conPassword=document.getElementById('confirm_password')
const messageContainer=document.querySelector('message-container')
const message=document.getElementById('message')

let isValid=false
let passwordsMatch=false

function storeData(){
    const user={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        Website:form.website.value,
        password:form.password.value
    }
    console.log(user)
}

function validateForm(){
    isValid=form.checkValidity()
    console.log(isValid)
    if(!isValid){
    message.textContent="Please fill out all fields."
    message.style.color="red"
    messageContainer.style.borderColor="red"
    return 
    }
    if(password.value===conPassword.value){
        passwordsMatch=true
        password.style.borderColor="green"
        conPassword.style.borderColor="green"
    }else{
        passwordsMatch=false
        message.style.color='red'
        message.textContent='Make sure password match.'
        messageContainer.style.borderColor='red'
        password.style.borderColor="red"
        conPassword.style.borderColor="red"
        return 
    }
    if(isValid && passwordsMatch){
        message.textContent="Successfully registerd!"
        message.style.color="green"
        messageContainer.style.borderColor='green'
    }
}

function processFormData(e){
    e.preventDefault()
    validateForm()
    if(isValid && passwordsMatch){
        storeData()
    }
}

form.addEventListener('submit',processFormData)