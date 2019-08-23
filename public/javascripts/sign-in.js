class SignIn {
    constructor(){
        this.init(); 
    }

    formSubmit() {
        validation.validationForm();

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const userData = { email: email.value, password: password.value };

        if (email.validity.valid && password.validity.valid) {

            axios.post('/', userData)

            .then(res => {
                window.location.assign('/home');
            })

            .catch(err => {
                const text = 'Incorected login or password!';
                notification.showNotification(text);
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

    redirectSignUp() {
        window.location.assign('/sign-up');
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

        const buttonSignUp = document.querySelector('.registration__button');
        buttonSignUp.addEventListener('click', () => {
            this.redirectSignUp()
        })
    }
}

let signIn = new SignIn();
