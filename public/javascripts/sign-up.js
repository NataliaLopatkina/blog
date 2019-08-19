class SignUp extends Authentication {
    constructor() {
        super();

        const formSend = document.querySelector('.form__content');

        formSend.addEventListener('submit', (event) => {
            event.preventDefault();

            this.validationForm();
            this.userData = {}
            this.getUserData();

            console.log(this.userData);

            if (email.validity.valid && password.validity.valid) {

                axios.post('/', this.userData)

                    .then(response => {
                        window.location.assign('/');
                    })

                    .catch(error => {
                        const text = 'User with the same name already exists!';
                        this.createNotification(text);
                        this.deleteNotification();
                    })
            }
        })

        this.togglePassword();
    }
}

let signUp = new SignUp();

const buttonSignIn = document.querySelector('.registration__button');

buttonSignIn.addEventListener('click', () => {
    window.location.assign('/');
})
