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
            this.users = response.data.users
            user.printUsers(this.users);
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

    init() {
        const searchButton = document.querySelector('.search__button');
        searchButton.addEventListener('click', ()=> {
            const keyword = document.getElementById('search').value;
            this.getUsers(keyword)
        })
    }
}

let home = new Home();


