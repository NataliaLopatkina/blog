class Autentication {
    constructor(){}

    getFieldEntry() {
        this.fieldEntry = document.querySelector('.form__input');
        this.fieldEntry.forEach((item)=> {
            this.getValue(item);
        })
    }

    getValue(item) {
        if(item.id === 'name') {
            this.data.name = item.value;
        } else if(item.id === 'email') {
            this.data.email = item.value;
        } else if (item.id === 'password') {
            this.data.password = item.value;
        }
    }
}

let autentication = new Autentication();
