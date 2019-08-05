// class UserData {
//     constructor() {
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         this.userData = {name: name, email: email, password: password};
//     }

//     getUserData() {
//         axios.post('http://localhost:3000/sign-up',this.userData)

//         .then(response => console.log(response))
//         .catch(error => console.log(error));
//     }
// }

//let userData = new UserData();
const buttonSend = document.querySelector('.form__button-send');

buttonSend.addEventListener('click', function() {
    userData();
})

function userData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userData = {name: name, email: email, password: password};

    axios.post('http://localhost:3000/sign-up', userData)

    .then(response => console.log(response))
    .catch(error => console.log(error));
}