// Definindo váriaveis
var btn = document.querySelector('#mostrar');
var btn2 = document.querySelector('#tirar');
var container = document.querySelector('.container');

// Quando o botão for pressionado
btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }

});

// Botar de sair for pressionado
btn2.addEventListener('click', function() {

    container.style.display = 'none';

});