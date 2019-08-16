class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000', data)

        .then(response => {
            window.location.assign('/home');
        })
        .catch(error => {
            const text = 'Incorected login or password!'
            notification.createNotification(text);
            notification.deleteNotification();
        });
    }
}

let dataService = new DataService()

const buttonSend = document.querySelector('.form__button-send');

const form = document.querySelector('.form__content');
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const fieldEntry = document.querySelectorAll('input');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const data = { email: email.value, password: password.value };

    fieldEntry.forEach((item) => {
        if (item.validity.valid) {
            item.classList.remove('invalid')
        }

        else {
            item.classList.add('invalid');
        }
    })

    if (email.validity.valid && password.validity.valid) {
        dataService.sendData(data);
    }
})

const buttonSignUp = document.querySelector('.registration__button');

buttonSignUp.addEventListener('click', () => {
    window.location.assign('/sign-up');
    }
)

class Notification {
    createNotification(text) {
        const authenticationForm = document.querySelector('.form');
        const authenticationFormContent = document.querySelector('.form__content');

        const notification = document.createElement('div');
        notification.classList.add('notification');
        authenticationForm.insertBefore(notification, authenticationFormContent);

        const notificationText = document.createElement('span');
        notificationText.classList.add('notification__text');
        notificationText.innerText = text;
        notification.appendChild(notificationText);

        const notificationButton = document.createElement('button');
        notificationButton.classList.add('notification__button');
        notificationButton.innerText = 'X';
        notification.appendChild(notificationButton);
    }

    deleteNotification() {
        const buttonDelete = document.querySelector('.notification__button');
        const notification = document.querySelector('.notification');

        buttonDelete.addEventListener('click', () => {
            notification.remove();
        })
    }
}

let notification = new Notification();

if (document.querySelectorAll('.form__password-button').length > 0) {
    let buttonShowPassword = document.querySelector('.form__password-button');
    let inputPassword = document.getElementById('password');

    buttonShowPassword.addEventListener('click', function () {
        buttonShowPassword.classList.toggle('not-show');

        let typeUnput = inputPassword.getAttribute('type');

        if (typeUnput == 'password') {
            inputPassword.setAttribute('type', 'text');
        } else {
            inputPassword.setAttribute('type', 'password');
        }
    })
}
