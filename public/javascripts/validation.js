class Validation {
    validationForm() {
        const inputs = document.querySelectorAll('.form__input');

        inputs.forEach((item) => {
            if (item.validity.valid) {
                item.classList.remove('invalid')
            }

            else {
                item.classList.add('invalid');
            }
        })
    }
}

let validation = new Validation();
