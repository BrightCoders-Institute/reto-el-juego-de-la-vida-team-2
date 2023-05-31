const { Tablero } = require("./src/clases");
const { Celula } = require("./src/celula");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fila;
let columna;

rl.question("Escribe el valor de la fila: ", (filaInput) => {
  fila = parseInt(filaInput);
  if (fila > 0) {
    rl.question("Escribe el valor de la columnas: ", (columnaInput) => {
      columna = parseInt(columnaInput);
      if (columna > 0) {
        main();
      } else {
        console.log("Columna debe ser > 0");
      }
      rl.close();
    });
  } else {
    console.log("Fila debe ser > 0");
    rl.close();
  }
});

function reglas(filas, columnas) {
  const celula = new Celula();
  const tablero = new Tablero();
  tablero.fila = filas;
  tablero.columna = columnas;
  for (let i = 0; i < tablero.fila; i++) {
    for (let j = 0; j < tablero.columna; j++) {
      if (tablero[i][j] === ".") {
        celula.vida = true;
      } else {
        celula.vida = false;
      }
      if (
        (celula.vida && tablero.cantVecinos(i, j) < 2) ||
        tablero.cantVecinos(i, j) > 3
      ) {
        celula.vida = false;
        tablero[i][j] = "*";
      } else if (
        (celula.vida && tablero.cantVecinos(i, j) === 3) ||
        tablero.cantVecinos(i, j) === 2
      ) {
        celula, (vida = true);
        tablero[i][j] = ".";
      } else if (celula.vida && tablero.cantVecinosVivos(i, j) === 3) {
        celula, (vida = true);
        tablero[i][j] = ".";
      }
    }
  }
}

const main = () => {
  const tablero = new Tablero(fila, columna);
  tablero.crearTablero().forEach((fila) => {
    console.log(`${fila.join("")}\n`);
  });
  //console.log(tablero.crearTablero());
};
