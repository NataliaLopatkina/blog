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

            .then(response => {
                window.location.assign('/home');
            })

            .catch(error => {
                const text = 'Incorected login or password!';
                notification.showNotification(text);
            })
        }
    }

    togglePassword() {
        this.buttonShowPassword.classList.toggle('not-show');
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

        this.buttonShowPassword = document.querySelector('.form__password-button');

        this.buttonShowPassword.addEventListener('click', () => {
            event.preventDefault();
            event.stopPropagation();
            this.togglePassword()
        })

        const buttonSignUp = document.querySelector('.registration__button');

        buttonSignUp.addEventListener('click', () => {
            this.redirectSignUp()
        })
    }
}

let signIn = new SignIn();
