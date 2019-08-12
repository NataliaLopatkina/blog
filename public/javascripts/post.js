class DataService {
    constructor() { }

    getData(data) {
        axios.post('http://localhost:3000/post', data)

        .then(response => {
            window.location.assign('/my-posts')
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

    dataService.getData(data);
})
