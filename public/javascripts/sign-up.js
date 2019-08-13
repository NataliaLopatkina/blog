class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000/sign-up', data)

        .then(response => {
            window.location.assign('/')
        })
        .catch(error => {
            const incorrectedEmail = document.querySelector('.incorrected');
            incorrectedEmail.classList.add('active');

            const buttonClose = document.querySelector('.incorrected__button');

            buttonClose.addEventListener('click', () => {
                incorrectedEmail.classList.remove('active');
            })
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
        const fieldEntry = document.querySelectorAll('input');

        fieldEntry.forEach((item)=> {
            if (!item.validity.valid) {
                item.classList.add('invalid');
            } else {
                item.classList.remove('invalid');
            }
        }) 
    }
}

let errorMessage = new ErrorMessage();

const form = document.querySelector('.form__content');
form.addEventListener('submit', (event)=> {
    errorMessage.addErrorMessage();
})
