const usernav = document.getElementById('usernav');
const closed = document.getElementById('close');

let username = JSON.parse(localStorage.getItem('user'));


if (username !== null) {
    usernav.innerHTML = '<h1 id="usernav"><span class="resaltado">Trebol28</span> Welcome ' + username[0].usuario + '</h1>';
} else {
    usernav.innerHTML = '<h1 id="usernav"><span class="resaltado">Trebol28</span> Welcome No se Inicio Sección</h1>';
}

closed.addEventListener('click', function() {

    localStorage.clear('user');
    location.href = 'index.html';

});