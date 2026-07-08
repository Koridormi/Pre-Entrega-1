// PreEntrega 1
document.addEventListener('DOMContentLoaded', () => {
    usuarioDatos();
    sumar();
})

function usuarioDatos() {
    let nombre = prompt('Como te llamas?');
    
    if(nombre === null) {
        return;
    } else if(nombre === '') {
        nombre = '?';
    };

    let apellido = prompt('Cual es tu apellido?');
    
    if(apellido === null) {
        return;
    } else if(apellido === '') {
        apellido = '?';
    };

    const mesDeNacimiento = prompt('Cual es tu fecha de nacimiento?');

    if(mesDeNacimiento === null) {
        return;
    };

    const signo = calcularSigno(mesDeNacimiento);

    alert(`Saludos: ${nombre.trim()} ${apellido.trim()}\nTu signo es: ${signo}`);
};

function sumar() {
    const numero1 = prompt('Dime un Numero..');
    if(numero1 === null) {
        return;
    };

    const numero2 = prompt('Dime otro Numero...');
    if(numero2 === null) {
        return;
    };

    const numeroA = parseFloat(numero1);
    const numeroB = parseFloat(numero2);

    const resultado = numeroA + numeroB;
    if(Number.isNaN(resultado)) {
        alert('Operacion no Valida');
    } else {
        alert(resultado);
    };
};

function calcularSigno(mesDeNacimiento) {
    let signoDelZodiaco = ' --> Mes No Encontrado <--';

    switch(mesDeNacimiento.trim().toLowerCase()) {
        case 'enero':
            signoDelZodiaco = 'Capricornio';
            break;
        case 'febrero':
            signoDelZodiaco = 'Acuario';
            break;
        case 'marzo':
            signoDelZodiaco = 'Piscis';
            break;
        case 'abril':
            signoDelZodiaco = 'Aries';
            break;
        case 'mayo':
            signoDelZodiaco = 'Tauro';
            break;
        case 'junio':
            signoDelZodiaco = 'Geminis';
            break;
        case 'julio':
            signoDelZodiaco = 'Cancer';
            break;
        case 'agosto':
            signoDelZodiaco = 'Leo';
            break;
        case 'septiembre':
            signoDelZodiaco = 'Virgo';
            break;
        case 'octubre':
            signoDelZodiaco = 'Libra';
            break;
        case 'noviembre':
            signoDelZodiaco = 'Escorpio';
            break;
        case 'diciembre':
            signoDelZodiaco = 'Sagitario';
            break;
        default:
            break;
    };

    return signoDelZodiaco;
};