const { Celula } = require("../Celula.js");

describe("Celula", () => {
  const celula = new Celula();
  test("Revisa que se realice la instancia de la Clase correctamente", () => {
    
    expect(celula).toBeInstanceOf(Celula);
  });

  describe("representacionCelula", () => {
   
    test('Debe devolver "*" si el estado es true (vivo)', () => {
      //const celulaViva = new Celula();
      celula.estado = true;
      expect(celula.representacionCelula()).toBe("*");
    });

    test('debería devolver "." si el estado es false (muerto)', () => {
      //const celulaMuerta = new Celula();
      celula.estado = false;
      expect(celula.representacionCelula()).toBe(".");
    });
  });

  describe("estadoGen2", () => {
    test("debería devolver false si la célula está viva y tiene menos de 2 vecinos", () => {
      //const celula = new Celula();
      celula.estado = true;
      celula.vecinos = 1;
      expect(celula.estadoGen2()).toBe(false);
    });

    test("debería devolver false si la célula está viva y tiene más de 3 vecinos", () => {
      //const celula = new Celula();
      celula.estado = true;
      celula.vecinos = 5;
      expect(celula.estadoGen2()).toBe(false);
    });

    test("debería devolver true si la célula está viva y tiene 2 o 3 vecinos", () => {
      //const celula = new Celula();
      celula.estado = true;
      celula.vecinos = 2;
      expect(celula.estadoGen2()).toBe(true);

      celula.vecinos = 3;
      expect(celula.estadoGen2()).toBe(true);
    });

    test("debería devolver true si la célula está muerta y tiene exactamente 3 vecinos vivos", () => {
      //const celula = new Celula();
      celula.estado = false;
      celula.vecinos = 3;
      expect(celula.estadoGen2()).toBe(true);
    });

    test("debería devolver false si la célula está muerta y no tiene exactamente 3 vecinos vivos", () => {
      //const celula = new Celula();
      celula.estado = false;
      celula.vecinos = 2;
      expect(celula.estadoGen2()).toBe(false);

      celula.vecinos = 4;
      expect(celula.estadoGen2()).toBe(false);
    });
  });
});
