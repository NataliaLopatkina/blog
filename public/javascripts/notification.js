class Notification {
    createNotification(text) {
        this.notification = document.createElement('div');
        this.notification.classList.add('notification');

        const notificationText = document.createElement('span');
        notificationText.classList.add('notification__text');
        notificationText.innerText = text;
        this.notification.appendChild(notificationText);

        const notificationButton = document.createElement('button');
        notificationButton.classList.add('notification__button');
        notificationButton.innerText = 'X';
        this.notification.appendChild(notificationButton);
    }

    addNotification(parentBlock) {
        parentBlock.appendChild(this.notification);
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
