class SignUp {
    constructor() {
        this.init();
    }

    formSubmit() {
        validation.validationForm();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const userData = { name: name.value, email: email.value, password: password.value }

        if (name.validity.valid && email.validity.valid && password.validity.valid) {

            axios.post('/sign-up', userData)

            .then(res => {
                window.location.assign('/');
            })

            .catch(err => {
                const text = 'User with the same name already exists!';
                notification.error(text);
            })
        }
    }

    togglePassword(buttonPassword) {
        buttonPassword.classList.toggle('not-show');
        const inputPassword = document.getElementById('password');
        const typeUnput = inputPassword.getAttribute('type');

        if (typeUnput == 'password') {
            inputPassword.setAttribute('type', 'text');
        } else {
            inputPassword.setAttribute('type', 'password');
        }
    }

    redirectSignIn() {
        window.location.assign('/');
    }

    init() {
        const formSend = document.querySelector('.form__content');
        formSend.addEventListener('submit', () => {
            event.preventDefault();
            this.formSubmit()
        })

        const buttonPassword = document.querySelector('.form__password-button');
        buttonPassword.addEventListener('click', () => {
            event.preventDefault();
            event.stopPropagation();
            this.togglePassword(buttonPassword)
        })

        const buttonSignIn = document.querySelector('.registration__button');
        buttonSignIn.addEventListener('click', () => {
            this.redirectSignIn();
        })
    }
}

let signUp = new SignUp();
