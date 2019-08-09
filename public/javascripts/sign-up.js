class UserService {
    constructor() {}

    getUserData(userData) {
        axios.post('http://localhost:3000/sign-up', userData)

        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
}

let userService = new UserService();
const buttonSend = document.querySelector('.form__button-send');

buttonSend.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userData = {name: name, email: email, password: password};

    userService.getUserData(userData);
})