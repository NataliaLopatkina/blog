class SignUp {
    constructor() {
        const formSend = document.querySelector('.form__content');

        formSend.addEventListener('submit', (event) => {
            event.preventDefault();

            validation.validationForm();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const userData = {name: name.value, email: email.value, password: password.value}

            if (name.validity.valid &&email.validity.valid && password.validity.valid) {

                axios.post('/sign-up', userData)

                .then(response => {
                    window.location.assign('/');
                })

                .catch(error => {
                    const text = 'User with the same name already exists!';
                    const page = document.querySelector('.page__container');
                    notification.createNotification(text);
                    notification.addNotification(page);
                    notification.deleteNotification();
                })
            }
        })
    }

    togglePassword() {
        let buttonShowPassword = document.querySelector('.form__password-button');
        let inputPassword = document.getElementById('password');

        buttonShowPassword.addEventListener('click', function () {
            event.preventDefault();
            event.stopPropagation();
            buttonShowPassword.classList.toggle('not-show');

            let typeUnput = inputPassword.getAttribute('type');

            if (typeUnput == 'password') {
                inputPassword.setAttribute('type', 'text');
            } else {
                inputPassword.setAttribute('type', 'password');
            }
        })
    }
}

let signUp = new SignUp();

signUp.togglePassword();

const buttonSignIn = document.querySelector('.registration__button');

buttonSignIn.addEventListener('click', () => {
    window.location.assign('/');
})
