class Authentication {
    getUserData() {
        const inputs = document.querySelectorAll('input');

        inputs.forEach((item) => {
            const id = item.getAttribute('id');

            if (id === 'name') {
                this.userData.name = item.value;

            } else if (id === 'email') {
                this.userData.email = item.value;

            } else if (id === 'password') {
                this.userData.password = item.value;
            }
        })
    }

    validationForm() {
        const inputs = document.querySelectorAll('input');

        inputs.forEach((item) => {
            if (item.validity.valid) {
                item.classList.remove('invalid')
            }

            else {
                item.classList.add('invalid');
            }
        })
    }

    togglePassword() {
        let buttonShowPassword = document.querySelector('.form__password-button');
        let inputPassword = document.getElementById('password');

        buttonShowPassword.addEventListener('click', function () {
            event.preventDefault();
            event.stopPropagation();
            buttonShowPassword.classList.toggle('not-show');

            let typeUnput = inputPassword.getAttribute('type');

            if (typeUnput == 'password') {
                inputPassword.setAttribute('type', 'text');
            } else {
                inputPassword.setAttribute('type', 'password');
            }
        })
    }
}

let authentication = new Authentication();
