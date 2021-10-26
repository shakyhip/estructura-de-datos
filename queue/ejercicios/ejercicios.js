/*
5.- Se tiene una cola de colores y se tiene que dividir en dos colas,
respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra

Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/

var colaColores = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
console.log(colaColores);

var tamanioCola = colaColores.length;
var colaPares = [];
var colaNones = [];
/*
for (let i = 1; i <= tamanioCola; i++) {
    if(i % 2 == 0){
        colaNones.push(colaColores.shift());
    } else {
        colaPares.push(colaColores.shift());
    }

}
console.log(colaNones);
console.log(colaPares);
*/

var counter = 1;
while (colaColores.length != 0) {
    if (counter % 2 == 0) {
        colaNones.push(colaColores.shift());
    } else {
        colaPares.push(colaColores.shift());
    }
    counter++;
}
console.log(colaNones);
console.log(colaPares);


/*
6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención.
Sin embargo, llegada la hora de inicio hay muchos “colados”,
es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket.
Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.

Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];
*/

var colaUsuarios = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true }
];
console.log(colaUsuarios)

var colaChida = [];
var colaColados = [];

while (colaUsuarios.length != 0) {
    if (colaUsuarios[0].ticket == true) { // colaUsuarios[0] = cola.peek() == cola.front()
        colaChida.push(colaUsuarios.shift());
    } else {
        colaColados.push(colaUsuarios.shift());
    }
}
console.log(colaChida);
console.log(colaColados);