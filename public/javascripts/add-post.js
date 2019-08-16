class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000/add-post', data)

        .then(response => {
            window.location.assign('/my-posts');
            console.log('dedwe')
        })
        .catch(error => {
            console.log(error)
        });
    }
}

let dataService = new DataService()

const buttonAdd = document.querySelector('.add-post__button');

buttonAdd.addEventListener('click', ()=> {
    const title = document.getElementById('title').value;
    const text = document.getElementById('text-post').value;

    const data = {title: title, text: text};

    dataService.sendData(data);
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
