class SignIn extends Authentication {
    constructor(){
        super();

        const formSend = document.querySelector('.form__content');

        formSend.addEventListener('submit', (event) => {
            event.preventDefault();

            this.validationForm();
            this.userData = {}
            this.getUserData();

            if (email.validity.valid && password.validity.valid) {

                axios.post('/', this.userData )

                .then(response => {
                    window.location.assign('/home');
                })

                .catch(error => {
                    const text = 'Incorected login or password!';
                    this.createNotification(text);
                    this.deleteNotification();
                })
            }
        })

        this.togglePassword();
    }
}

let signIn = new SignIn();

const buttonSignUp = document.querySelector('.registration__button');

buttonSignUp.addEventListener('click', ()=> {
    window.location.assign('/sign-up');
})
