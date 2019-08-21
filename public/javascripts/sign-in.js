class SignIn {
    constructor(){
        const formSend = document.querySelector('.form__content');

        formSend.addEventListener('submit', (event) => {
            event.preventDefault();
            validation.validationForm();

            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const userData = { email: email.value, password: password.value };

            if (email.validity.valid && password.validity.valid) {

                axios.post('/', userData)

                .then(response => {
                    window.location.assign('/home');
                })

                .catch(error => {
                    const text = 'Incorected login or password!';
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

let signIn = new SignIn();

signIn.togglePassword();

const buttonSignUp = document.querySelector('.registration__button');

buttonSignUp.addEventListener('click', ()=> {
    window.location.assign('/sign-up');
})
