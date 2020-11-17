const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {
    lamp.src = 'img/ligada.jpg'
}

function lampOff () {
    lamp.src = 'img/desligada.jpg';
}

function lampBroker () {
    lamp.src = 'img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn );
turnOff.addEventListener ('click', lampOff );
lamp.addEventListener ('mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOff );
lampOff.addEventListener ('dblclick', lampBroker );