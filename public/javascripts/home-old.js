class DataService {
    constructor() { }

    getData(keyword) {
        axios.get('http://localhost:3000/users', {
            params: {
                keyword,
            }
        })

        .then(response => {
            // if (document.querySelectorAll('.user').length > 0) {

            //     const userActive = document.querySelectorAll('.user');

            //     userActive.forEach((item) => {
            //         item.remove();
            //     })
            // }

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

                const buttonSort = document.querySelector('.button--asd');

                buttonSort.addEventListener('click', function() {
                    users.sort((prev, next) => {
                        if (prev.name < next.name) return -1;
                        if (prev.name > next.name) return 1
                    })

                    const userActive = document.querySelectorAll('.user');

                    userActive.forEach((item) => {
                        item.remove();
                    })

                    users.forEach(item => {
                        const name = item.name;
                        const id = item.id;
                        user.createUser(name, id);
                    })
                })

                const buttonSortDesc = document.querySelector('.button--desc');

                buttonSortDesc.addEventListener('click', function () {
                    users.sort((prev, next) => {
                        if (prev.name < next.name) return -1;
                        if (prev.name > next.name) return 1
                    })

                    const userActive = document.querySelectorAll('.user');

                    userActive.forEach((item) => {
                        item.remove();
                    })

                    users.reverse().forEach(item => {
                        const name = item.name;
                        const id = item.id;
                        user.createUser(name, id);
                    })
                })

                errorMessage.classList.remove('active');
            
        })

        .catch(error => console.log(error));
    }
}

let dataService = new DataService()


if (document.querySelectorAll('.button-menu').length > 0) {
    let buttonMenu = document.querySelector('.button-menu');
    let navList = document.querySelector('.nav');

    buttonMenu.addEventListener('click', function () {
        if (navList.classList.contains('nav--opened')) {
            navList.classList.remove('nav--opened');
            buttonMenu.classList.remove('button-menu--closed');
        } else {
            navList.classList.add('nav--opened');
            buttonMenu.classList.add('button-menu--closed');
        }
    })
}
