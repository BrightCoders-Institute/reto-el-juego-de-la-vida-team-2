const { randomBool } = require("./Utils");
const { Celula } = require("./Celula");

class Tablero {
  gen1 = [];
  gen2 = [];

  constructor(fila, columna) {
    this.fila = fila;
    this.columna = columna;
    this.#crearGen1();
  }

  #crearGen1() {
    for (let i = 0; i < this.fila; i++) {
      this.gen1.push([]);
      for (let j = 0; j < this.columna; j++) {
        const celula = new Celula(randomBool());
        this.gen1[i].push(celula);
      }
    }
  }

  printGen1() {
    this.#print(this.gen1);
  }

  printGen2() {
    this.#crearGen2();
    this.#print(this.gen2);
  }

  #print(celulas) {
    const simbolos = celulas.map((fila) => {
      return fila.map((celula) => {
        return celula.representacionCelula();
      });
    });

    simbolos.forEach((simbolo) => {
      console.log(`${simbolo.join("")}\n`);
    });
  }

  #crearGen2() {
    //actualizar vecinos gen1
    this.gen1.forEach((filCelulas, i) => {
      filCelulas.forEach((celula, j) => {
        if (i + 1 < this.fila) {
          //celula de abajo
          if (this.gen1[i + 1][j].estado) {
            celula.vecinos++;
          }
        }
        if (i - 1 >= 0) {
          //celula de arriba
          if (this.gen1[i - 1][j].estado) {
            celula.vecinos++;
          }
        }
        if (j + 1 < this.columna) {
          //celula siguiente
          if (this.gen1[i][j + 1].estado) {
            celula.vecinos++;
          }
        }
        if (j - 1 >= 0) {
          //Celula anterior
          if (this.gen1[i][j - 1].estado) {
            celula.vecinos++;
          }
        }
      });
    });

    //crear gen2 conforme a los vecinos

    for (let i = 0; i < this.fila; i++) {
      this.gen2.push([]);
      for (let j = 0; j < this.columna; j++) {
        const celula = new Celula(this.gen1[i][j].estadoGen2());
        this.gen2[i].push(celula);
      }
    }
    //console.log(this.gen2);
  }
  // generadorSimbolos() {
  //   const simbolo = Math.random();
  //   if (simbolo > 0.5) {
  //     return "*";
  //   }
  //   return ".";
  // }

  // cantidadVecinos(fila, columna) {
  //   let cantidad = 0;
  //   for (let i = fila - 1; i <= fila + 1; i++) {
  //     for (let j = columna - 1; j <= columna + 1; j++) {
  //       if (i - 1 >= 0 || j - 1 >= 0) {
  //         cantidad++;
  //       }
  //     }
  //   }
  // }

  // cantidadVecinosVivos(fila, columna) {
  //   const largoFila = 0;

  //   for (let i = -1; i < 1; i++) {
  //     for (let i = -1; i <= 1; i++) {
  //       if (i === 0 && j === 0) continue;

  //       const vecinoFila = fila + i;
  //       const vecinoColumna = columna + j;
  //     }
  //   }
  // }
}

module.exports = { Tablero };
