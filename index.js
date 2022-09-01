const registerBtn = document.querySelector('#register');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');
const form = document.querySelector('form');

const register = () => {
    if(password.value !== confirm_password.value) {
        console.log('not equal');
        password.style.border = '3px solid red';
        confirm_password.style.border = '3px solid red';
        const err = document.createElement('span');
        err.textContent = 'Passwords do not match';
        err.style.color = 'red';
        password.parentElement.appendChild(err);
    }
}
registerBtn.addEventListener('click', () => {
    register();
})

const validateForm = () => {
    if(password.value !== confirm_password.value) {
        return false;
    } else {
        form.submit();
        return true;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})