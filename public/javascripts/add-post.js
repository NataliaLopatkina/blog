class AddPost {
    constructor() { }

    sendData(data) {
        axios.post('/add-post', data)

        .then(response => {
            window.location.assign('/my-posts');
        })
        .catch(error => {
            console.log(error)
        });
    }
}

let addPost = new AddPost()

const formSend = document.querySelector('.add-post__form');

formSend.addEventListener('submit', ()=> {
    const inputs = document.querySelectorAll('input');
    this.userData = {}

    if (email.validity.valid && password.validity.valid) {
        inputs.forEach((item) => {
            const id = item.getAttribute('id');

            if (id === 'title') {
                this.userData.title = item.value;

            } else if (id === 'text') {
                this.userData.text = item.value;
            }
        })

        addPost.sendData(userData);
    }
})

class ErrorMessage {
    constructor() { }

    addErrorMessage() {
        const fieldEntry = document.querySelectorAll('.form__input');

        fieldEntry.forEach((item) => {
            if (!item.validity.valid) {
                item.classList.add('invalid');
            } else {
                item.classList.remove('invalid');
            }
        })
    }
}

let errorMessage = new ErrorMessage();

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    errorMessage.addErrorMessage();
})

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
