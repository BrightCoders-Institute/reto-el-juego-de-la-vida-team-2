const { Tablero, Celula } = require("./src/clases");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tablero = new Tablero();
tablero.print();

const celula = new Celula();
celula.print();

rl.question("Entra la fila: ", (inputFila) => {
  console.log(inputFila);
  rl.close();
});
