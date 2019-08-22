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
                    const following = item.getAttribute('data-like');
                    this.submitFollowing(following);
                })
            })
        })

        .catch(error => {
            user.deleteUsers();
            const text = 'Users not found!';
            notification.showNotification(text);
        })
    }

    submitFollowing(following) {
        axios.post('/following', { following: following })

        .then((res) => {
            console.log(res)
        })

        .catch((error) => {
            console.log(error)
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




