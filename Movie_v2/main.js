var xhr = new XMLHttpRequest(),
    page = document.getElementById('page'),
    items = document.getElementById('items'),
    urlSearch, responseData;


document.getElementById('searchBtn').addEventListener('click', getMovie);

getMovie();

function getMovie() {
    urlSearch = 'https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a&page=' + page.value;
    xhr.open('GET', urlSearch);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
            displayItems(responseData);
        }
    };

    function ratingCalculation() {

    }

    function displayItems(entity) {
        var i, item = '', rateColor;
        console.log('entity', entity);

        for (i = 0; i < entity.results.length; i++) {
            if (entity.results[i].vote_average < 3) {
                rateColor = 'red';
            } else if (3 <= entity.results[i].vote_average && entity.results[i].vote_average <= 7) {
                rateColor = 'yellow';
            } else if (7 < entity.results[i].vote_average) {
                rateColor = 'green';
            }

            item += '<div class="item col-xl-4 col-md-6 col-sm-12">' +
                '<div class="header-section">' +
                '<div class="image"><span class="helper"></span><img src="https://image.tmdb.org/t/p/w500_and_h282_face'
                + entity.results[i].poster_path + '"/></div>' +
                '<div class="info"><div class="wrapper">' +
                '<div>' + entity.results[i].title + '</div>' +
                '<div>' + entity.results[i].release_date + '</div>' +
                '<div class="' + rateColor + '">' + entity.results[i].vote_average + '</div>' +
                '</div></div></div>' +
                '<div class="description col-xl-12 col-md-12 d-none d-md-block">' + entity.results[i].overview + '</div>' + '</div></div>';
            document.getElementById('items').innerHTML = item;
        }
    }
}


