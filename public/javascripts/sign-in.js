const buttonSend = document.querySelector('.form__button-send');

buttonSend.addEventListener('click', function() {
    userData();
})

function userData() {
    const login = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const userData = {login: login, password: password};

    axios.post('http://localhost:3000/sign-in', userData)

    .then(response => console.log(response))
    .catch(error => console.log(error));
}