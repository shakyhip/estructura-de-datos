/*
1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).

Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]
*/

function ajusteDePila(pila, numero) {
    for (let i = 0; pila.length != numero; i++) {
        pila.pop();
    }
    return pila;
}

var nuevaPila = ajusteDePila(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón', 'Pepino', 'Calabaza', 'Uvas'], 4);
console.log(nuevaPila);


/*
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number,
y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún
lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.

Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
*/

function reemplazar(pila, nuevo, viejo) {

    //proceso
    while (pila[pila.length - 1] != viejo) {
        pila.pop();
    }
    pila.pop();
    pila.push(nuevo)
    return pila;
}

var remp = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
console.log(remp);



/*
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
camino. Muestre el camino recorrido tanto de ida como de vuelta.

Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
*/

var recorrido = [];
recorrido.push('Guadalajara');
recorrido.push('La Venta del Astillero');
recorrido.push('Santa Cruz del Astillero');
recorrido.push('El Arenal');
recorrido.push('Amatitán');
recorrido.push('Tequila');
console.log(recorrido);

function retorno(pila) {
    var pilaRetorno = [];
    while (pila.length != 0) {
        pilaRetorno.push(pila.pop());
        //let pueblo = pila.pop();
        //pilaRetorno.push(pueblo);
    }
    return pilaRetorno;
}
console.log(retorno(recorrido));


/*
4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación.
Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él
y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.
Implementar en codigo esta funcionalidad.
Entrada: [ConA, ConB, ConC, ConD, ConE]
Salida: [ConA, ConB, ConD, ConE]
*/
var contenedores = ['ConA', 'ConB', 'ConC', 'ConD', 'ConE'];
console.log(contenedores);

function sacar(pila, contenedor) {
    let pilaSecundaria = [];

    while (pila[pila.length - 1] != contenedor) {
        pilaSecundaria.push(pila.pop());
    }
    pila.pop();

    while (pilaSecundaria.length != 0) {
        pila.push(pilaSecundaria.pop());
    }

    return pila;
}

console.log(sacar(contenedores, 'ConC'));