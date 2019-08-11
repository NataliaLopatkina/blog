class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000/sign-up', data)

        .then(response => {
            window.location.assign('/')
        })
        .catch(error => {
            console.log(error)
        });
    }
}

let dataService = new DataService()

const buttonSend = document.querySelector('.form__button-send');

buttonSend.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = { name: name, email: email, password: password};

    dataService.sendData(data);
})

class ErrorMessage {
    constructor() {}

    addErrorMessage() {
        const error = document.querySelector('.error');
        const errorEmail = document.querySelector('.error--email');
        const errorPassword = document.querySelector('.error--password')
        const inputName = document.getElementById('name');
        const inputEmail = document.getElementById('email');
        const inputPassword = document.getElementById('password');

        if(!inputName.validity.valid) {
            error.innerText = 'Name are required!';
            inputName.classList.add('invalid');
            error.classList.add('active')
        } else{
            false;
        }
    
        if(!inputEmail.validity.valid) {
            errorEmail.innerText = 'Email are required!';
            inputEmail.classList.add('invalid');
            errorEmail.classList.add('active')
        } else{
            false;
        }
    
        if(!inputPassword.validity.valid) {
            errorPassword.innerText = 'Password are required!';
            inputPassword.classList.add('invalid');
            errorPassword.classList.add('active')
        } else{
            false;
        }
    }
}

let errorMessage = new ErrorMessage();

const form = document.querySelector('.form__content');
form.addEventListener('submit', (event)=> {
    errorMessage.addErrorMessage();
})