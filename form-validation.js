let dataForm = {
    name: '',
    email: '',
    msg: '',
  }

const contactForm = document.querySelector('#contact-form');
const email = document.querySelector('#form-email');
const errorMsg = document.querySelector('#error-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  if (emailValue === emailValue.toLowerCase()) {
    contactForm.submit();    
    localStorage.clear();
    contactForm.reset();
  } else {
    errorMsg.innerHTML = 'Please, enter lower case letters only';
  }
});


const nameForm = document.querySelector('#form-name');
const emailForm = document.querySelector('#form-email');
const msgForm = document.querySelector('#form-msg');


nameForm.addEventListener('change',(e) => {
  dataForm.name = nameForm.value;  
  localStorage.setItem('dataForm',JSON.stringify (dataForm)  );
})

emailForm.addEventListener('change',(e) => {
    dataForm.email = emailForm.value;  
    localStorage.setItem('dataForm',JSON.stringify (dataForm)  );
  })
  

msgForm.addEventListener('change',(e) => {
    dataForm.msg = msgForm.value;  
    localStorage.setItem('dataForm',JSON.stringify (dataForm)  );
  })


dataFormStr=localStorage.getItem('dataForm');

if (dataFormStr!=null){
    dataForm = JSON.parse(dataFormStr)
    nameForm.value = dataForm.name;
    emailForm.value = dataForm.email;
    msgForm.value = dataForm.msg;
}