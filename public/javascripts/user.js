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

        const usersList = document.querySelector('.users');
        usersList.appendChild(this.user)
    }

    deleteUsers() {
        const users = document.querySelectorAll('.user');
        users.forEach((item)=> {
            item.remove();
        })
    }

    compareFunction(prev, next) {
        if (prev.name < next.name) {
            return -1
        } else if (prev.name > next.name) {
            return 1
        }
    }

    sortUsers(users, sortType) {
        if (sortType === 'ascend') {
            users.sort(this.compareFunction)

        } else if (sortType === 'descend') {
            users.sort(this.compareFunction).reverse();
        }
    }

    renderUsers(users, sortType) {
        const self = this;
        this.sortUsers(users, sortType)
        users.forEach(item => {
            const name = item.name;
            const id = item.id;
            self.createUser(name, id);
        })
    }
}

let user = new User();
