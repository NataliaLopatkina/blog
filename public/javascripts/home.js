class Home {
    constructor() {
        const buttonSearch = document.querySelector('.search__button');

        buttonSearch.addEventListener('click', () => {
            event.preventDefault();

            validation.validationForm();
            const search = document.querySelector('.search__input');
            const keyword = search.value;

            if (search.validity.valid) {
                axios.get('http://localhost:3000/users', {
                    params: {
                        keyword,
                    }
                })

                .then(response => {
                    if (document.querySelectorAll('.user').length > 0 ) {
                        user.deleteUsers();
                    }
                    const { users } = response.data;

                    if (users.length > 0) {
                        user.printUsers(users);
                        this.buttonSort = document.querySelector('.search-content__button-sort');
                        this.buttonSort.classList.add('is-active');
                    }

                    this.buttonSort.addEventListener('click', ()=> {
                        this.buttonSort.classList.toggle('.search-content__button-sort--desc');

                        if (this.buttonSort.classList.contains('search-content__button-sort--desc')) {
                            this.buttonSort.classList.remove('search-content__button-sort--desc');
                            this.sortUsers(users)
                            user.deleteUsers();
                            user.printUsers(users.reverse());
                        } else {
                            this.buttonSort.classList.add('search-content__button-sort--desc');
                            this.sortUsers(users)
                            user.deleteUsers();
                            user.printUsers(users);
                        }
                    })

                    // const buttonFollowing = document.querySelectorAll('.user__following');

                    // buttonFollowing.forEach((item)=> {
                    //     this.addFollowing(item);
                    // })
                })

                .catch(error => {
                    if (document.querySelectorAll('.user').length > 0) {
                        user.deleteUsers();
                    }
                    const text = 'Users are not found!';
                    const page = document.querySelector('.page__container');
                    notification.createNotification(text);
                    notification.addNotification(page);
                    notification.deleteNotification();
                })
            }
        })
    }

    // addFollowing(item) {
    //     item.addEventListener('click', () => {
    //         const following = item.getAttribute('data-like');

    //         axios.post('/following', { following: following })

    //         .then((res) => {
    //             const status = res.data.status;
    //         })

    //         .catch((error) => {
    //             console.log(error)
    //         })
    //     })
    // }

    sortUsers(users) {
        users.sort((prev, next) => {
            if (prev.name < next.name) return -1;
            if (prev.name > next.name) return 1;
        })
    }
}

let home = new Home();
