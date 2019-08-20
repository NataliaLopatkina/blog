class Notification {
    createNotification(text) {
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

    addNotification(parentBlock) {
        const notificationContainer = document.querySelector('.notification');
        parentBlock.appendChild(notificationContainer);
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
