const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', function(event) {

    event.preventDefault();
    // console.log('click');
    let users = Array({
        usuario: username.value,
        contrasena: password.value
    });
    console.log(users);
    localStorage.setItem('user', JSON.stringify(users));
    location.href = 'inicio.html';

});