const contactForm = document.querySelector("#contact-form");
console.log('contactForm:',contactForm);
const email = document.querySelector("#email");
const errorMsg = document.querySelector("#error-message");




contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let emailValue = email.value;
    console.log(emailValue);
    if ( emailValue === emailValue.toLowerCase()){
        contactForm.submit();
    }else{
        errorMsg.innerHTML = "Please, enter lower case letters only";
    }
});