class Notification {
    createNotification(text, notError) {
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

        if(notError) {
            this.notification.classList.add('not-error')
        }
    }

    addNotification() {
        const parentBlock = document.querySelector('.page__container');
        parentBlock.appendChild(this.notification);
    }

    deleteNotification() {
        const buttonDelete = document.querySelector('.notification__button');
        const notification = document.querySelector('.notification');

        buttonDelete.addEventListener('click', () => {
            notification.remove();
        })
    }
    
    dissapearNotification() {
        setTimeout(()=> {
            this.notification.remove();
        }, 3000)
    }

    showNotification(text, notError) {
        this.createNotification(text, notError);
        this.addNotification();
        this.deleteNotification();
        this.dissapearNotification();
    }
}

let notification = new Notification();
