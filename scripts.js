/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletter');
    var email_input = document.getElementById('email');
    var messageDiv = document.querySelector('.message');


    form.addEventListener('submit', function(event){
        event.preventDefault();

        const enteredEmail = email_input.ariaValueMax.trim();

        if (enteredEmail === ""){
            messageDiv.textContent = "Please enter a valid email address."

        }  else {
            messageDiv.textContent = "Thank you! Your email address ${email} has been added to our mailing list!"

        }

        email_input.value = "";

    });

});