
console.log('Inicio de programa'); //1

setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout'); //3
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout'); //4
}, 0 );


console.log('Fin de programa'); //2

