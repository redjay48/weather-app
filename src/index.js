const searchBar = document.querySelector('#search');
const searchBtn = document.getElementById('search-btn');



searchBtn.addEventListener('click', function() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=95e569ea6908c8defcf7629bc3f9281d`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
})
