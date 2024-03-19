const submit = document.querySelector('#submitbutton');

const email = document.getElementById('email');
const demo = document.getElementById("demo");

const zipcode = document.getElementById('zipcode');
const zipcode1 = document.getElementById("zipcode1");

const country = document.getElementById('country');
const country1 = document.getElementById("country1");

const password = document.getElementById('password');
const password1 = document.getElementById("password1");

const passconf = document.getElementById('passconf');
const passconf1 = document.getElementById("passconf1");

function validateInput(input, errorfield) {
    if (!input.checkValidity()) {
        errorfield.innerHTML = "  " + input.validationMessage;
} else {
    errorfield.innerHTML = "";
  };
}

function validate() {
  if (password.value === passconf.value) {
      // Passwords match
      passconf1.textContent = "";
      passconf.validity = true;
  } else {
      passconf1.textContent = "  Passwords do not match";
      passconf.validity = false;
  };
};

const myForm = document.getElementById("myForm"); // Replace with your form ID
const lol = document.querySelector('.lol');


lol.addEventListener('click', (event) => {
  const high = document.getElementById('high');
  if (!email.checkValidity() || !zipcode.checkValidity() || !country.checkValidity() || !password.checkValidity() || !passconf.checkValidity()) {
    high.textContent = 'All fields need to be filled in.';
    event.preventDefault();
  } else {
    high.textContent = 'High Five'
  }
});

email.addEventListener('blur', () => {
  validateInput(email, demo);
});

zipcode.addEventListener('blur', () => {
  validateInput(zipcode, zipcode1);
});

country.addEventListener('blur', () => {
  validateInput(country, country1);
});

password.addEventListener('blur', () => {
  validateInput(password, password1);
});

passconf.addEventListener('input', () => {
  validate();
});

