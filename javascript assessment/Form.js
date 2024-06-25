document.addEventListener('DOMContentLoaded', () =>{

    const form = document.getElementById('registrationForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const retypePassword = document.getElementById('retypePassword');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const mobile = document.getElementById('mobile');
    const gender = document.getElementById('gender');
    const country = document.getElementById('country');
    const terms = document.getElementById('terms');

    form .addEventListener('submit', function (event) {
        event.preventDefault();

        clearErrors();

        let isValid = true;

        if(!email.value){
            showError('emailError','Email is required');
            isValid = false;
        }

        if(!password.value){
            showError('passwordError','Password is required');
            isValid = false;
        }

        if(!retypePassword.value){
            showError('retypePasswordError','Passwor doesnot match');
            isValid = false;
        }

        if(!firstName.value){
            showError('firstNameError','First Name is required');
            isValid = false;
        }

        if(!lastName.value){
            showError('lastNameError','Last Name is required');
            isValid = false;
        }

        if(!mobile.value){
            showError('mobileError','Mobile number is required');
            isValid=false;
        }

        if (![...gender].some(g => g.checked)) {
            showError('genderError', 'Gender is required');
            isValid = false;
        }

        if(!country.value){
            showError('countryError','Country is required');
            isValid=false;
        }

        if (!terms.checked) {
            showError('termsError', 'You must agree with terms and conditions');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });
    mobile.addEventListener('input', function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    function showError(elementId,message){
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearErrors(){
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.style.display = 'None')
    }

});