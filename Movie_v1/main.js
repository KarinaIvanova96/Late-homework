var xhr = new XMLHttpRequest(),
    responseData;

xhr.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        responseData = JSON.parse(xhr.responseText);
        console.log(responseData);
        displayItems(responseData);
    }
};

function displayItems(entity) {
    var i, item = '';
    console.log('entity', entity);

    for (i = 0; i < entity.results.length; i++) {
        item += '<div class="item"><img src="https://image.tmdb.org/t/p/w500_and_h282_face' + entity.results[i].poster_path + '" class="poster"/>' +
            '<div class="wrapper">' +
            '<div class="title"><span>Title: </span>' + entity.results[i].title + '</div>' +
            '<div class="date"><span>Date: </span>' + entity.results[i].release_date + '</div>' +
            '<div class="description"><span>Description: </span>' + entity.results[i].overview + '</div>' +
            '<div class="rate"><span>Rate: </span>' + entity.results[i].vote_average + '</div>' + '</div></div><hr class="hr-line"/>';
    }

    document.getElementById('items').innerHTML = item;
}

