class DataService {
    constructor() {}

    sendData(data) {
        axios.post('http://localhost:3000/sign-up', data)

        .then(response => {
            window.location.assign('/')
            console.log(response)
        })
        .catch(error => {
            const text = 'User with the same name already exists!'
            notification.createNotification(text);
            notification.deleteNotification();
        });
    }
}

let dataService = new DataService()

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

const buttonSignIn = document.querySelector('.registration__button');

buttonSignIn.addEventListener('click', () => {
    window.location.assign('/');
    }
)
