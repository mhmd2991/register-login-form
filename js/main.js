let btns = document.querySelectorAll('.btns a'),
    sections = document.querySelectorAll('.sec');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        let sectionName = btn.dataset.section;
        sections.forEach((sec) => {
            sec.classList.remove('active');
        });
        document.querySelector(`.${sectionName}`).classList.add('active');
    });
});

const form = document.getElementById('form');
const fName = document.getElementById('f-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rpassword = document.getElementById('r-password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const fNameValue = fName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const rpasswordValue = rpassword.value.trim();

    if (fNameValue === '') {
        setErrorFor(fName, 'Full Name cannot be blank');
    } else {
        setSuccessFor(fName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (rpasswordValue === '') {
        setErrorFor(rpassword, 'Password cannot be blank');
    } else if (passwordValue !== rpasswordValue) {
        setErrorFor(rpassword, 'Passwords does not match');
    } else {
        setSuccessFor(rpassword);
    }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement.parentNode;
    const small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formGroup = input.parentElement.parentNode;
    formGroup.className = 'form-group success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}