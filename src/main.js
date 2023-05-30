// //const Tablero = require("./clases");
import Tablero from "./clases.js";

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fila;
let columna;

rl.question("Escribe el valor de la fila", (filaInput) => {
  fila = parseInt(filaInput);
  if (fila > 0) {
    rl.question("Escribe el valor de la columnas", (columnaInput) => {
      columna = parse(columnaInput);
      if (columna < 0) {
        console.log("Columna debe ser > 0");
      }
      rl.close();
    });
  } else {
    console.log("Fila debe ser > 0");
    rl.close();
  }
});

const tablero = new Tablero(fila, columna);
tablero.generadorSimbolos();
