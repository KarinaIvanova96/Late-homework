var isPopupActive, selectedItem = {}, selectedSize, price = 0, priceForSelectedSize = 0,  supplementsTotalPrice = 0, supplementsSelected = [];

document.addEventListener("DOMContentLoaded", function (event) {
    // Generating list of pizzas

    var productsTemplate = document.getElementById('products'), i,
        item, p, a, img;

    for (i = 0; i < products.length; i++) {
        item = document.createElement('div');
        item.className = 'item';

        p = document.createElement('p');
        p.innerHTML = products[i].name;
        item.appendChild(p);
        a = document.createElement('a');

        (function (value) {
            a.addEventListener('click', function () {
                selectItem(value);
            }, false)
        })(+products[i].id);

        img = document.createElement('img');
        img.src = 'images/' + products[i].img;

        a.appendChild(img);
        item.appendChild(a);

        p = document.createElement('p');
        p.innerHTML = 'от <b>' + products[i].sizes[0].price + '</b> грн';

        item.appendChild(p);

        a = document.createElement('a');
        a.className = 'button';
        a.innerHTML = 'Выбрать';

        (function (value) {
            a.addEventListener('click', function () {
                selectItem(value);
            }, false)
        })(+products[i].id);

        item.appendChild(a);

        productsTemplate.appendChild(item);
    }

    // Generating static supplements
    var supplementsList = document.getElementById('supplements'), supplement;
    p = document.createElement('p');
    p.innerHTML = 'Выберите добавки:';
    supplementsList.appendChild(p);

    for (i = 0; i < supplements.length; i++) {
        supplement = document.createElement('div');
        supplement.className = 'supplement';
        (function (value, el) {
            supplement.addEventListener('click', function () {
                toggleSupplement(value, el);
            }, false)
        })(supplements[i], supplement);
        img = document.createElement('img');
        img.src = 'images/supplements/' + supplements[i].img;
        supplement.appendChild(img);
        supplementsList.appendChild(supplement);
    }

});

function selectItem(id) {
    selectedItem = products.filter(function (item) {
        if (item.id === id) return item;
    })[0];

    if (selectedItem) {
        document.getElementById('popup').style.display = 'inline-block';
        isPopupActive = true;
        document.getElementById('name').innerHTML = selectedItem.name;

        var p = document.createElement('p');
        p.innerHTML = 'Выберите размер:';
        document.getElementById('sizes').appendChild(p);

        for (var i = 0; i < selectedItem.sizes.length; i++) {
            var sizeLine = document.createElement('div');
            sizeLine.className = 'size';
            sizeLine.id = selectedItem.sizes[i].size;
            sizeLine.innerHTML = selectedItem.sizes[i].size.toUpperCase();
            (function (value) {
                sizeLine.addEventListener('click', function () {
                    selectSize(value);
                }, false)
            })(selectedItem.sizes[i].size);
            document.getElementById('sizes').appendChild(sizeLine);
        }
    }
}

function selectSize(size) {
    var sizes;

    for (var i = 0; i < selectedItem.sizes.length; i++) {
        if (String(selectedItem.sizes[i].size) === String(size)) {
            priceForSelectedSize = selectedItem.sizes[i].price;
            price = priceForSelectedSize + supplementsTotalPrice;
            selectedSize = selectedItem.sizes[i].size;
        }
    }

    sizes = document.getElementsByClassName("size");

    for (i = 0; i < sizes.length; i++) {
        sizes[i].classList.remove("active");
    }
    document.getElementById(selectedSize).classList.add("active");
    document.getElementById('order').removeAttribute("disabled");
    document.getElementById('invoice').innerHTML = 'Сумма к оплате: ' + price + ' грн.';
}

function toggleSupplement(supplement, element) {
    if (supplementsSelected.indexOf(supplement.name) === -1) {
        element.classList.add('selected');
        supplementsTotalPrice += supplement.price;
        supplementsSelected.push(supplement.name);
    } else {
        element.classList.remove('selected');
        supplementsTotalPrice -= supplement.price;
        supplementsSelected.splice(supplementsSelected.indexOf(supplement.name), 1);
    }
    price = priceForSelectedSize + supplementsTotalPrice;
    document.getElementById('invoice').innerHTML = 'Сумма к оплате: ' + price + ' грн.';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('sizes').innerHTML = '';
    document.getElementById('order').setAttribute('disabled', 'disabled');
    document.getElementById('invoice').innerHTML = '';

    var selectedSupplementsClasses = document.getElementsByClassName('selected'),
        count = selectedSupplementsClasses.length;
    for (var i = 0; i < count; i++) {
        selectedSupplementsClasses[0].classList.remove('selected');
    }

    supplementsSelected = [];
    supplementsTotalPrice = 0;
    priceForSelectedSize = 0;
    price = 0;
    isPopupActive = false;
}

function order() {
    localStorage.setItem('Order',
        JSON.stringify({
            "item": selectedItem,
            "supplements": supplementsSelected,
            "price": price,
            "size": selectedSize}));
    window.location = 'order.html';
}

window.addEventListener("keyup", function (e) {
    if (e.key === 'Escape' && isPopupActive) {
        closePopup();
    }
}, false);
