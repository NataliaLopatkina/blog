class DataService {
    constructor() { }

    getData(keyword) {
        axios.get('http://localhost:3000/users', {
            params: {
                keyword,
            }
        })

        .then(response => {
            if (document.querySelectorAll('.user').length > 0) {

                const userActive = document.querySelectorAll('.user');

                userActive.forEach((item) => {
                    item.remove();
                })
            }

            const { users } = response.data;
            const errorMessage = document.querySelector('.error');

            console.log(user)

            if (users.length === 0) {
                errorMessage.classList.add('active');

            } else {
                users.forEach(item => {
                    const name = item.name;
                    const id = item.id;
                    user.createUser(name, id);
                })

                errorMessage.classList.remove('active');
                const buttonFriend = document.querySelectorAll('.user__following');

                buttonFriend.forEach((item) => {
                    item.addEventListener('click', () => {
                        const following = item.getAttribute('data-like');

                        axios.post('/following', { following: following} )

                        .then((res) => {
                            const status = res.data.status;
                            if (status === 201) {
                                if (document.querySelectorAll('.notification').length > 0) {
                                    const notificationBlock = document.querySelectorAll('.notification');
                                    notificationBlock.remove();

                                    const text = 'You are added to the list followers of this user';
                                    const type = 'not-error';
                                    notification.createNotification(text, type);
                                    notification.deleteNotification();
                                    
                                } else {
                                    const text = 'You are added to the list followers of this user';
                                    const type = 'not-error';
                                    notification.createNotification(text, type);
                                    notification.deleteNotification();
                                }

                            } else if (status === 204) {
                                if (document.querySelectorAll('.notification').length > 0) {
                                    const notificationBlock = document.querySelector('.notification');
                                    notificationBlock.remove();

                                    const text = 'You are removed to the list followers of this user';
                                    const type = 'not-error';
                                    notification.createNotification(text, type);
                                    notification.deleteNotification();
                                } else {
                                    const text = 'You are removed to the list followers of this user';
                                    const type = 'not-error';
                                    notification.createNotification(text, type);
                                    notification.deleteNotification();
                                }
                            }
                        })

                        .catch((error)=> {
                            console.log(error)
                        })
                    })
                })
            }

            user.addFriend();
        })

        .catch(error => console.log(error));
    }
}

let dataService = new DataService()

const buttonSearch = document.querySelector('.search__button');

buttonSearch.addEventListener('click', () => {
    const fieldEntry = document.querySelector('.search__input');
    const keyword = fieldEntry.value;

    dataService.getData(keyword);
})

class User {
    constructor() { }

    createUser(name, id) {
        const usersList = document.querySelector('.users')
        const user = document.createElement('div');
        user.classList.add('user');
        user.classList.add('users__item');

        usersList.appendChild(user);

        const nameUser = document.createElement('p');
        nameUser.classList.add('user__name');

        user.appendChild(nameUser);

        nameUser.innerText = name;

        const userFollowing = document.createElement('button');
        userFollowing.classList.add('user__following');
        userFollowing.setAttribute('data-like', id);

        user.appendChild(userFollowing);
    }

    addFriend() {
        let buttonsLike = document.querySelectorAll('.user__following');

        buttonsLike.forEach(function (item) {
            item.addEventListener('click', function () {
                item.classList.toggle('friend');
            })
        })
    }
}

let user = new User();


class Notification {
    createNotification(text, type) {
        const searchContent = document.querySelector('.search-content');
        const usersList = document.querySelector('.users');

        const notification = document.createElement('div');
        notification.classList.add('notification');
        searchContent.insertBefore(notification, usersList);

        const notificationText = document.createElement('span');
        notificationText.classList.add('notification__text');
        notificationText.innerText = text;
        notification.appendChild(notificationText);

        const notificationButton = document.createElement('button');
        notificationButton.classList.add('notification__button');
        notificationButton.innerText = 'X';
        notification.appendChild(notificationButton);

        if (type === 'not-error') {
            notification.classList.add('notification--not-error')
        }
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

if (document.querySelectorAll('.button-menu').length > 0) {
    let buttonMenu = document.querySelector('.button-menu');
    let navList = document.querySelector('.nav');

    buttonMenu.addEventListener('click', function () {
        if (navList.classList.contains('nav--opened')) {
            navList.classList.remove('nav--opened');
            buttonMenu.classList.remove('button-menu--closed');
        } else {
            navList.classList.add('nav--opened');
            buttonMenu.classList.add('button-menu--closed');
        }
    })
}
