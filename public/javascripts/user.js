class User {
    constructor(){}
    createUser(name, id) {
        this.user = document.createElement('div');
        this.user.classList.add('user');
        this.user.classList.add('users__item');

        const nameUser = document.createElement('p');
        nameUser.classList.add('user__name');

        this.user.appendChild(nameUser);

        nameUser.innerText = name;

        const userFollowing = document.createElement('button');
        userFollowing.classList.add('user__following');
        userFollowing.setAttribute('data-like', id);

        this.user.appendChild(userFollowing);
    }

    addUser() {
        const usersList = document.querySelector('.users');
        usersList.appendChild(this.user)
    }

    deleteUsers() {
        const users = document.querySelectorAll('.user');
        users.forEach((item)=> {
            item.remove();
        })
    }

    printUsers(users) {
        this.deleteUsers();
        users.forEach(item => {
            const name = item.name;
            const id = item.id;
            this.createUser(name, id);
            this.addUser();
        })
    }
}

let user = new User();
