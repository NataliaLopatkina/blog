class Authentication {
    getUserData() {
        const inputs = document.querySelectorAll('input');

        inputs.forEach((item) => {
            const id = item.getAttribute('id');

            if (id === 'name') {
                this.userData.name = item.value;

            } else if (id === 'email') {
                this.userData.email = item.value;

            } else if (id === 'password') {
                this.userData.password = item.value;
            }
        })
    }

    validationForm() {
        const inputs = document.querySelectorAll('input');

        inputs.forEach((item) => {
            if (item.validity.valid) {
                item.classList.remove('invalid')
            }

            else {
                item.classList.add('invalid');
            }
        })
    }

    togglePassword() {
        let buttonShowPassword = document.querySelector('.form__password-button');
        let inputPassword = document.getElementById('password');

        buttonShowPassword.addEventListener('click', function () {
            event.preventDefault();
            event.stopPropagation();
            buttonShowPassword.classList.toggle('not-show');

            let typeUnput = inputPassword.getAttribute('type');

            if (typeUnput == 'password') {
                inputPassword.setAttribute('type', 'text');
            } else {
                inputPassword.setAttribute('type', 'password');
            }
        })
    }

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

let authentication = new Authentication();
