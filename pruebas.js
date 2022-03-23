//import
const Contenedor = require("./index.js");
const productos = require("./listaProductos.js");
// console.log(productos);

//creo clase contenedor
const contenedor = new Contenedor("./productos.txt");

//FUNCIONES PARA PRUEBAS

// //metodo writeFile(writeFile)
// const pruebaWrite = async () => {
//   contenedor.writeFile(JSON.stringify(productos));
// };
// pruebaWrite();

////metodo getAll (readFile)
// contenedor.getAll();

////metodo getById
// contenedor.getById();

////metodo deleteById
// contenedor.deleteById();

////metodo deleteAll
// contenedor.deleteAll();

// //metodo save (agregar producto)
//contenedor.save();
