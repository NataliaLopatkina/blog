class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000', data)

        .then(response => {
            window.location.assign('/home');
        })
        .catch(error => {
            const incorrectedData = document.querySelector('.incorrected');
            incorrectedData.classList.add('active');

            const buttonClose = document.querySelector('.incorrected__button');

            buttonClose.addEventListener('click', () => {
                incorrectedData.classList.remove('active');
            })  
        });
    }
}

let dataService = new DataService()

const buttonSend = document.querySelector('.form__button-send');

buttonSend.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = { email: email, password: password };

    dataService.sendData(data);
})

const buttonSignUp = document.querySelector('.registration__button');

buttonSignUp.addEventListener('click', () => {
    window.location.assign('/sign-up');
    }
)
