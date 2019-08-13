class DataService {
    constructor() { }

    sendData(data) {
        axios.post('http://localhost:3000/post', data)

        .then(response => {
            //window.location.assign('/my-posts')
            console.log(response)
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
