class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000', data)

        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
}

let dataService = new DataService()

const buttonSend = document.querySelector('.form__button-send');

buttonSend.addEventListener('click', () => {
    const fieldEntry = document.querySelectorAll('input');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = { email: email, password: password };

    dataService.sendData(data);

    fieldEntry.forEach((item) => {

        if (item.value !== '') {
            //window.location.assign('/home')

        } else {
            error.addErrorBox();
        }
    })
})

const buttonSignUp = document.querySelector('.registration__button');

buttonSignUp.addEventListener('click', () => {
    window.location.assign('/sign-up');
    }
)

class Error {
    constructor() { }

    addErrorBox() {
        const authenticationBox = document.querySelector('.authentication')
        const errorBox = document.createElement('div');
        const errorText = document.createElement('p');
        const form = document.querySelector('.form');

        authenticationBox.insertBefore(errorBox, form);
        errorBox.classList.add('error');
        errorBox.appendChild(errorText);
        errorText.classList.add('error__text');
        errorText.innerText = 'Enter you data';
    }
}

let error = new Error();
