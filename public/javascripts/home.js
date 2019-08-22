class Home {
    constructor() {
        this.init();
    }

    getUsers(keyword) {
        axios.get('http://localhost:3000/users', {
            params: {
                keyword,
            }
        })

        .then(response => {
            const { users } = response.data;
            user.printUsers(users);

            const buttonsFollowing = document.querySelectorAll('.user__following');
            buttonsFollowing.forEach((item)=> {
                item.addEventListener('click', ()=> {
                    if(item.classList.contains('active')) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                    }
                    const following = item.getAttribute('data-like');
                    this.submitFollowing(following);
                })
            })

            const sortButton = document.querySelector('.sort__button');
            sortButton.addEventListener('click', () => {
                if (sortButton.classList.contains('sort__button--reverse')) {
                    sortButton.classList.remove('sort__button--reverse');
                    this.sortUsers(users);
                    user.deleteUsers();
                    user.printUsers(users.reverse());
                    
                } else {
                    sortButton.classList.add('sort__button--reverse');
                    this.sortUsers(users);
                    user.deleteUsers();
                    user.printUsers(users);
                }
            })
        })

        .catch(error => {
            user.deleteUsers();
            const text = 'Users not found!';
            notification.showNotification(text, false);
        })
    }

    submitFollowing(following) {
        axios.post('/following', { following: following })

        .then((res) => {
            if(res.status === 201) {
                const text = 'You are added to the followers list of this user.'
                const notError = true;
                notification.showNotification(text, notError)

            } else if (res.status === 204) {
                const notError = true;
                const text = 'You are removed from the subscribers of this user'
                notification.showNotification(text, notError)
            }
        })

        .catch((error) => {
            console.log(error)
        })
    }

    sortUsers(users) {
        users.sort((prev, next) => {
            if (prev.name < next.name) return -1;
            if (prev.name > next.name) return 1
        })
    }

    init() {
        const searchButton = document.querySelector('.search__button');
        searchButton.addEventListener('click', ()=> {
            const keyword = document.getElementById('search').value;
            this.getUsers(keyword)
        })
    }
}

let home = new Home();




