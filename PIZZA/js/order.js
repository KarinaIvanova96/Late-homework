var orderTemplate = document.getElementById('orderInfo'), order;

if (localStorage.getItem("Order")) {
    order = JSON.parse(localStorage.getItem("Order"));
    orderTemplate.innerHTML = '' +
        '<p>Ваш заказ:</p>' +
        '<p>' + order.item.name + '</p>' +
        '<div class="order">' +
        '<img src="images/' + order.item.img + '"/>' +
        '<p>Размер: ' + order.size + '</p>' +
        '<p>Добавки: ' + (order.supplements.join(', ') || 'Без добавок') + '</p>' +
        '<p>Стоимость: ' + order.price + '</p></div>';
}

function getFormData() {
    var elements = document.getElementById("formWithValidation").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    console.log(JSON.stringify(order.item.name) + JSON.stringify(order.size) + JSON.stringify(order.supplements) + JSON.stringify(order.price) + JSON.stringify(obj))
}