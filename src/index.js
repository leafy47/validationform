const submit = document.querySelector('#submitbutton');


function validateInput() {
    const email1 = document.getElementById('email');
    if (!email1.checkValidity()) {
        document.getElementById("demo").innerHTML = email1.validationMessage;
} else {
    document.getElementById("demo").innerHTML = "";
  };
}

const email = document.getElementById('email');
email.addEventListener('blur', () => {
  validateInput();
});


