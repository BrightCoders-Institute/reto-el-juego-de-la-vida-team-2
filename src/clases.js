export default class Tablero {
  constructor(fila, columna) {
    this.fila = fila;
    this.columna = columna;
  }

  generadorSimbolos() {
    const simbolo = Math.floor(Math.random());
    if (simbolo === 0) {
      return "*";
    }
    return ".";
  }

  estadoTablero() {
    for (let i = 0; i < this.fila; i++) {
      for (let j = 0; j < this.columna; j++) {}
    }
  }

  crearTablero() {
    let tablero = [];
    for (let i = 0; i < this.fila; i++) {
      for (let j = 0; j < this.columna; j++) {
        tablero[j].push(this.generadorSimbolos());
      }
    }
    return tablero;
  }
}

// module.exports = Tablero
