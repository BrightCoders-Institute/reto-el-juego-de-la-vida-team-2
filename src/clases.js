class Tablero {
  constructor(fila, columna) {
    this.fila = fila;
    this.columna = columna;
    this.tablero = this.crearTablero();
  }

  crearTablero() {
    let tablero = [];
    for (let i = 0; i < this.fila; i++) {
      tablero.push([]);
      for (let j = 0; j < this.columna; j++) {
        tablero[i].push(this.generadorSimbolos());
      }
    }
    return tablero;
  }

  generadorSimbolos() {
    const simbolo = Math.random();
    if (simbolo > 0.5) {
      return "*";
    }
    return ".";
  }

  cantidadVecinos(fila, columna) {
    let cantidad = 0;
    for (let i = fila - 1; i <= fila + 1; i++) {
      for (let j = columna - 1; j <= columna + 1; j++) {
        if (i - 1 >= 0 || j - 1 >= 0) {
          cantidad++;
        }
      }
    }
  }

  cantidadVecinosVivos(fila, columna) {
    const largoFila = 0;

    for (let i = -1; i < 1; i++) {
      for (let i = -1; i <= 1; i++) {
        if (i === 0 && j === 0) continue;

        const vecinoFila = fila + i;
        const vecinoColumna = columna + j;
      }
    }
  }
}

module.exports = { Tablero };
