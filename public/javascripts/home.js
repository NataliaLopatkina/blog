class Home {
    constructor() {
        this.init();
    }

    users = [];
    buttonsFollowing = [];
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

            user.deleteUsers();
            user.renderUsers(this.users, this.sortType);

            this.buttonsFollowing = document.querySelectorAll('.user__following');
            this.updateFollowingHandlers();
        })

        .catch(err => {
            user.deleteUsers();
            const text = 'Users not found!';
            notification.error(text);
        })
    }

    submitFollowing(following) {
        return axios.post('/following', { following: following })

        .then((res) => {
            if(res.status === 201) {
                const text = 'You are added to the followers list of this user.'
                notification.info(text);

            } else if (res.status === 204) {
                const text = 'You are removed from the subscribers of this user.'
                notification.info(text)
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
        })

        const buttonSort = document.querySelector('.sort__button');
        buttonSort.addEventListener('click', () => {
            this.sortType = this.sortType === "ascend" ? "descend" : "ascend";
            user.deleteUsers();
            user.renderUsers(this.users, this.sortType);
        }, this)
    }

    updateFollowingHandlers() {
        this.buttonsFollowing.forEach((item) => {
            item.addEventListener('click', ()=> {
                const following = item.getAttribute('data-like');
                return this.submitFollowing(following)
                .then(()=>{
                    item.classList.toggle('active');
                    //const buttonFollowing = Array.from(this.buttonsFollowing).find(item => item.dataset.like === following);
                    //console.log(buttonFollowing)
                    // buttonFollowing.classList.toggle('active');
                    //user.deleteUsers();
                    //user.renderUsers(this.users, this.sortType)
                })
            })
        })
    }
}

let home = new Home();


