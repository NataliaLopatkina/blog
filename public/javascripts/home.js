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
                            if (status === 204) {
                                alert('Вы удалены из списка followers данного пользователя')
                            } else if (status === 201) {
                                alert('Вы добавлены в список followers данного пользователя')
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
