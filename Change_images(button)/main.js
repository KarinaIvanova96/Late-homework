var img = document.getElementById('img');

function changeImage(item) {
    if (item === 'car') {
        img.src = 'img/car.jpg';
    } else if (item === 'animal') {
        img.src = 'img/animal.jpg';
    } else if (item === 'food') {
        img.src = 'img/food.jpg';
    }
}