document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    validateForm();
});
let buttonClicked = null;
let termsBtn = false;
const validateForm =()=>{
    let formValid = false;
    // //clear all errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('invalid'));
    const textarea = document.querySelector('textarea');
    textarea.classList.remove('invalid');

    //validate firstname
    const firstName = document.getElementById('firstName');
    const firstNameErr = document.querySelector('.first-name');

    if(firstName.value.trim() == ''){
        // formValid = true;
        firstNameErr.textContent = 'This field is required';
        firstName.classList.add('invalid');
    }else if(/^\d/.test(firstName.value.trim())){
        // formValid = true;
        firstNameErr.textContent = 'Firstname should not start with a number';
        firstName.classList.add('invalid');
    }   
    //validate lastname
    const lastName = document.getElementById('lastName');
    const lastNameErr = document.querySelector('.last-name');

    if(lastName.value.trim() == ''){
        formValid = true;
        lastNameErr.textContent = 'This field is required';
        lastName.classList.add('invalid');
    }else if(/^\d/.test(lastName.value.trim())){
        formValid = true;
        lastNameErr.textContent = 'lastname should not start with a number';
        lastName.classList.add('invalid');
    }

    //validate email
    const email = document.querySelector('#email');
    const emailErr = document.querySelector('.email-err');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(email.value.trim() == ''){
        formValid = true;
        emailErr.textContent = 'This field is required';
        email.classList.add('invalid');
    }else if(!emailRegex.test(email.value.trim())){
        formValid = true;
        emailErr.textContent = 'Invalid email address';
        email.classList.add('invalid');
    }

    //button querry
    if(!buttonClicked){
        formValid = true;
        btn_err.textContent = 'Plese select a query type';
    }

    // //validate message
    const message = document.querySelector('#message');
    const message_err = document.querySelector('.message-err');

    if(message.value.trim() == ''){
        formValid = true;
        message_err.textContent = 'This field is required';
        message.classList.add('invalid');
    }
    // //terms check
    if(!termsBtn){
        formValid = true;
        terms_err.textContent = 'To submit this form, please consent to being contacted';
    }
    if(!formValid){
        const message = document.querySelector('.section-2');
        message.style.display = 'block';
    }
}

const btn_err = document.querySelector('.btn-err');
const btn_querry1 = document.querySelector('#btn-querry1');
const btn_querry2 = document.querySelector('#btn-querry2');
// const query_check1 = document.querySelector('.query-check1');
// const query_check2 = document.querySelector('.query-check2');

btn_querry1.addEventListener('click',function(){
    buttonClicked = true;
    btn_querry1.classList.add('valid');
    btn_querry1.style.display = 'block';
});
btn_querry2.addEventListener('click',function(){
    buttonClicked = true;
    btn_querry2.classList.add('valid');
    btn_querry2.style.display ='block';
});

// //terms and condition
const terms = document.querySelector('.check-input');
const terms_img = document.querySelector('.check');
const terms_err = document.querySelector('.terms-err');

terms.addEventListener('click', function(){
        termsBtn = true;
        terms_img.style.display = 'block';
})