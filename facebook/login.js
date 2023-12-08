//  steap-1: add click event hanlder with the submite button 
document.getElementById('btn-submit').addEventListener('click', function () {
    //    step-2: get the email adress inside the email input field 
    const emailField = document.getElementById('usear-email')
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById('usear-password')
    const password = passwordField.value;
    console.log(password);

    if (email === 'sontan@bapp.com' && password === 'shah'){
        // console.log('valid user');
        window.location.href = 'another.html';
    }
    else{
        alert('please correct password')
     }
})














