class DataService {
    constructor() { }

    sendData(keyword) {
        axios.get('http://localhost:3000/users', {
         params: {
            keyword,
          }})

        .then(response => {
            if (document.querySelectorAll('.user').length > 0) {
                const userActive = document.querySelectorAll('.user');
                userActive.forEach((item) => {
                    item.remove();
                }) 
            }
            const {users} = response.data;
            const errorMessage= document.querySelector('.error');

            if (users.length === 0) {
                errorMessage.classList.add('active');

            } else {
                users.forEach(item => {
                    const name = item.name;
                    user.createUser(name);
                });

                errorMessage.classList.remove('active');
            }


        })
        .catch(error => console.log(error));
    }
}

let dataService = new DataService()

const buttonSearch = document.querySelector('.search__button');

buttonSearch.addEventListener('click', ()=> {
    const fieldEntry = document.querySelector('.search__input');
    const keyword = fieldEntry.value;

    dataService.sendData(keyword);
})

class User {
    constructor(){}

    createUser(name) {
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

        user.appendChild(userFollowing);
    }
}

let user = new User();