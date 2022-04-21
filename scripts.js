
let array = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];

// for (let i = 0; i < array.length; i++) {
//     alert(array[i]);
// }


array.splice(1);
console.log(array);


let respuesta =  0;
respuesta = prompt('Indique cual de los siguientes no es un Vengador: 1) Ironman, 2) Thor, 3) HawkEye, 4) Batman, 5) Hulk, 6) Capitan America');

while(respuesta != 4) {
    
    if(respuesta == 0 || respuesta > 6)
        alert('La opcion ingresada no existe. Intente de nuevo..')
    else {
        alert('Error! Intente de nuevo..')
    }
    respuesta = prompt('1) Ironman, 2) Thor, 3) HawkEye, 4) Batman, 5) Hulk, 6) Capitan America');

}

let respuesta2 = parseInt(prompt('Felicitaciones!! Ahora ingresa uno de los numeros para saber que arma utiliza dicho personaje: 1) Ironman, 2) Thor, 3) HawkEye, 4) Hulk, 5) Capitan America'));

switch(respuesta2) {
    case 1:
        alert('Ironman utiliza su traje como arma!');
        break;
    case 2: 
        alert('Thor utiliza un martillo!');
        break;
    case 3:
        alert('HawkEye utiliza un arco como Legolas!');
        break;
    case 4:
        alert('Hulk utiliza su fuerza..Hulk APLASTA!!');
        break;
    default:
        alert('Capitan America utiliza un escudo!');
        break;
}

alert('Adios!!')

    // if(x === 'carolina')
    // alert('Usted es una viejis viejis!!!');


