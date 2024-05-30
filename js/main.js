//let numero = parseInt (prompt ("Ingrese un numero"))

//if (isNaN (numero)){
  //  console.log("el numero ingresado no es un numero");

//}else{
//    console.log("el numero es valido")
//}

//let pi = 3.141592
//let piModificacion = pi.toFixed(2)
//console.log(piModificacion)

// let date = 2007
// console.log(tydate);

// let dateModificacion = date.toString()
// console.log(typeof dateModificacion)

//sintaxis
// let book = {
//     title :"Book",
//     año: 1749,
//     autor:"Charles"
//     //clave : valor

// }
// console.log(book);
// let person = {
//     name: "Jhon",
//     lastname: "Dove",
//     age: 23
// }
// console.log(person)

// let books = [
//     {
//     title :"Book",
//     año: 1749,
//     autor:"Charles"
//     },
//     {
//         title :"Book 1",
//         año: 1900,
//         autor:"Fabian"
//     }
// ]
// console.log(books)

// for(let index = 0; index < books.length; index++){
//     const element  = books[index];
//     console.log(element);


// let products = [
//     {name:"heladera", precio:2323, stock: 10},
//     {name:"teclado", precio:2328, stock: 6},
//     {name:"laptop", precio:2325, stock: 5}
// ]
// for(let index = 0; index < products.length; index++){
//     console.log(`${products[index].name} - precio : $${products[index].precio}- stock : ${products[index].stock}`);
// }
// console.log("-----------------------------------------------------------------")
// products.pop();//elimina el ultimo elemento del array
// console.log("-----------------------------------------------------------------")

// for (let index = 0 ;index < products.length; index++){
//     console.log(`${products[index].name} - precio : $${products[index].precio -stop}`);
// }

const product = {
    name: 'camiseta',
    price: 78473,
    stock:7
}

let nombre = product.name;
let namechange = product.name = 'Zapato';

delete product.stock;

console.log(product);

product.categoria = 'Calzado';
console.log(product);