function sendEmail(){
    Email.send({
        SecureToken : "fa056200-3131-4fda-9dbb-3f036518cbe0",
        To : 'lili.old97@gmail.com',
        From : document.querySelector('form').elements['email'].value,
        Subject : document.querySelector('form').elements['subject'].value,
        Body : document.querySelector('form').elements['message'].value
    }).then(
    message => alert('Tu correo ha sido enviado')
    );
}
form.addEventListener('submit', sendEmail());