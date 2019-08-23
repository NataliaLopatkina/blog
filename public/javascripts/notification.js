class Notification {
    createNotification(text, isError) {
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

        if (isError) {
            this.notification.classList.add('notification--error')
        }
        else {
            this.notification.classList.add('notification--info')
        }

        const parentBlock = document.querySelector('.page__container');
        parentBlock.appendChild(this.notification);

        this.addDeleteHandler();
    }


    addDeleteHandler() {
        const buttonDelete = document.querySelector('.notification__button');
        const notification = document.querySelector('.notification');

        buttonDelete.addEventListener('click', () => {
            notification.remove();
        })

        setTimeout(() => {
            this.notification.remove();
        }, 3000)
    }


    info(text) {
        this.createNotification(text, false);
    }

    error(text) {
        this.createNotification(text, true);
    }
}

let notification = new Notification();
