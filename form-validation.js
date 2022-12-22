const contactForm = document.querySelector('#contact-form');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('#error-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  if (emailValue === emailValue.toLowerCase()) {
    contactForm.submit();
  } else {
    errorMsg.innerHTML = 'Please, enter lower case letters only';
  }
});
