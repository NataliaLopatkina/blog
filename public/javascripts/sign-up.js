class DataService {
    constructor() {}

    sendData(data) {
        axios.post('http://localhost:3000/sign-up', data)

        .then(response => {
            window.location.assign('/')
            console.log(response)
        })
        .catch(error => {
            const incorrectedData = document.querySelector('.incorrected');
            const incrorrectedButton = document.querySelector('.incorrected__button');

            incorrectedData.classList.add('active');

            incrorrectedButton.addEventListener('click', ()=> {
                incorrectedData.classList.remove('active');
            })

            console.log(error)
        });
    }
}

let dataService = new DataService()

const send = document.querySelector('.form__button-send')

send.addEventListener('click', ()=> {
    
})

const form = document.querySelector('.form__content');
form.addEventListener('submit', (event)=> {
    event.preventDefault()

    const fieldEntry = document.querySelectorAll('input');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const data = { name: name.value, email: email.value, password: password.value };
    
    fieldEntry.forEach((item)=> {
        if (item.validity.valid) {
            item.classList.remove('invalid')
        }

        else {
            item.classList.add('invalid');
        }
    })

    if (name.validity.valid && email.validity.valid && password.validity.valid) {
        dataService.sendData(data);
    }
})
