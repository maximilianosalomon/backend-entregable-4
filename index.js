const fs = require("fs");

//class
class Contenedor {
  constructor(nombreArchivo) {
    this.fileName = nombreArchivo;
  }
  //metodos
  //escribir
  async writeFile(data) {
    try {
      const contenido = await fs.promises.writeFile(this.fileName, data);
      console.log("Creado!");
      return contenido;
    } catch (error) {
      ("No se pudo guardar el archivo");
    }
  }

  //leer todo
  async getAll() {
    try {
      const contenido = await fs.promises.readFile(this.fileName, "utf-8");
      console.log("Obtenidos!");
      return contenido;
    } catch (error) {
      ("No se pudo leer!");
    }
  }
  //leer x id
  async getById(id) {
    try {
      const contenido = await this.getAll();
      const contenidoParse = JSON.parse(contenido);
      const elemento = contenidoParse.filter((e) => e.id === id);
      console.log("Obtenido x id!");
      return elemento;
    } catch (error) {
      ("No se pudo leer x id!");
    }
  }
  async deleteById(id) {
    try {
      const contenido = await this.getAll();
      const contenidoParse = JSON.parse(contenido);
      const elementos = contenidoParse.filter((e) => e.id !== id);
      const contenidoNuevo = await this.save(JSON.stringify(elementos));
      console.log("Borrado x id!");
      return contenidoNuevo;
    } catch (error) {
      ("No se pudo eliminar x id!");
    }
  }
  async deleteAll() {
    try {
      console.log("borrado");
    } catch (error) {
      ("No se pudo eliminar!");
    }
  }
  //guardar
  async save() {
    try {
      const contenido = await this.getAll();
      const contenidoParse = JSON.parse(contenido);
      // console.log(contenidoParse);
      let array = [];
      for (const elemento of contenidoParse) {
        array.push(elemento.id);
      }
      // console.log(array);
      let miNumero = Math.max(...array);
      console.log(miNumero);
    } catch (error) {
      ("No se pudo guardar el archivo");
    }
  }
}

module.exports = Contenedor;
