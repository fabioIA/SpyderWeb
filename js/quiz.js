// Fução principal que chama todas
function Aranha() {
    
    let homem = Chama();

    // Mudando o elemeno "resultado"
    switch (homem) {

        case 'Tobey': return document.getElementById('resultado').innerHTML = '<div><h3>Você se parece com <mark>Tobey Maguire</mark></h3><img id="rosto" src="img/tobey.jpg" alt="Tobey"/></div>'; break;
        case 'Andrew': return document.getElementById('resultado').innerHTML = '<div><h3>Você se parece com <mark>Andrew Garfield</mark></h3><img id="rosto" src="img/andrew.jpg" alt="Andrew"/></div>'; break;
        case 'Tom': return document.getElementById('resultado').innerHTML = '<div><h3>Você se parece com <mark>Tom Holland</mark></h3><img id="rosto" src="img/tom.jpg" alt="Tom"/></div>'; break;

    }

    // <div>
    //     <h3>Você se parece com <mark>Tom Holland</mark></h3>

    //     <img id="rosto" src="img/tom.jpg" alt="Tom"/>
    // </div>

}

// Chama uma das funções dependendo da idade
function Chama() {

    let idade = parseInt(document.getElementById('idade').value);
        
    if(idade > 25) {
        return Tobey();

    }else if(idade > 14) {
        return Andrew();

    }else {
        return Tom();

    }

}

// Decide o Homem-Aranha se a idade for menor que 15
function Tom() {

    if(document.getElementById('transporte').value == 'bicleta') {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tom';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Andrew';

        }else {
            return 'Tobey';

        }

    }else if(document.getElementById('transporte').value == 'hoverboard') {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tom';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Tom';

        }else {
            return 'Andrew';

        }

    }else {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tom';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Andrew';

        }else {
            return 'Tom';

        }

    }

}


// Decide o Homem-Aranha se a idade for menor que 25
function Andrew() {
    if(document.getElementById('transporte').value == 'bicleta') {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tom';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Tobey';

        }else {
            return 'Tobey';

        }

    }else if(document.getElementById('transporte').value == 'hoverboard') {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tom';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Andrew';

        }else {
            return 'Andrew';

        }

    }else {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Andrew';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Andrew';

        }else {
            return 'Tobey';

        }

    }
}

// Decide o Homem-Aranha se a idade for maior que 25
function Tobey() {
    
    if(document.getElementById('transporte').value == 'bicleta') {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tobey';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Tobey';

        }else {
            return 'Tobey';

        }

    }else if(document.getElementById('transporte').value == 'hoverboard') {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Tom';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Andrew';

        }else {
            return 'Tobey';

        }

    }else {

        if(document.getElementById('musica').value == 'eletronica') {
            return 'Andrew';

        }else if(document.getElementById('musica').value == 'rock') {
            return 'Andrew';

        }else {
            return 'Tobey';

        }

    }

}