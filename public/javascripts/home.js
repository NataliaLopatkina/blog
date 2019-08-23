class Home {
    constructor() {
        this.init();
    }

    users = [];
    sortType = 'ascend';

    getUsers(keyword) {
        axios.get('http://localhost:3000/users', {
            params: {
                keyword,
            }
        })

        .then(res => {
            const { users } = res.data;
            this.users = users;
            user.renderUsers(this.users, this.sortType);
        })

        .catch(err => {
            console.log(err)
            user.deleteUsers();
            const text = 'Users not found!';
            notification.error(text);
        })
    }

    submitFollowing(following) {
        axios.post('/following', { following: following })

        .then((res) => {
            if(res.status === 201) {
                const text = 'You are added to the followers list of this user.'
                notification.notice(text);

            } else if (res.status === 204) {
                const text = 'You are removed from the subscribers of this user.'
                notification.notice(text)
            }
        })

        .catch((err) => {
            console.log(err)
        })
    }

    init() {
        const buttonMenu = document.querySelector('.button-menu');
        buttonMenu.addEventListener('click', () => {
            menu.toggleMenu(buttonMenu);
        })

        const searchButton = document.querySelector('.search__button');
        searchButton.addEventListener('click', ()=> {
            const keyword = document.getElementById('search').value;
            this.getUsers(keyword)

            console.log(this.users)
        })

        const buttonSort = document.querySelector('.sort__button');
        buttonSort.addEventListener('click', () => {
            this.sortType = this.sortType === "ascend" ? "descend" : "ascend";
            user.deleteUsers();
            user.renderUsers(this.users, this.sortType);
        }, this)
    }
}

let home = new Home();


