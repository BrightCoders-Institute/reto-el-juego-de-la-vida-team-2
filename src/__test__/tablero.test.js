//const { randomBool } = require("../Utils.js");
const { Tablero } = require("../Tablero.js");

//jest.mock("../Utils.js", () => {});

describe("Tablero", () => {
  const tablero = new Tablero(1, 1);
  test("Revisa que se realice la instancia del Tablero correctamente", () => {
    expect(tablero).toBeInstanceOf(Tablero);
  });

  describe("Gen 1", () => {
    test("Debe tener longitud n filas", () => {
      const tablero = new Tablero(5, 2);
      expect(tablero.gen1.length).toBe(tablero.fila);
    });

    test("Cada fila debe tener n columnas", () => {
      const tablero = new Tablero(2, 4);
      expect(tablero.gen1[0].length).toBe(tablero.columna);
    });
  });
});
