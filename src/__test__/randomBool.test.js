const { expect } = require("@jest/globals");
const { randomBool } = require("../Utils");
const random = jest.fn(randomBool);

describe("Random bool", () => {
  test("Debe retornar", () => {
    random();
    expect(random).toHaveReturned();
  });

  test("Debe ser devolver un valor definido", () => {
    expect(random()).toBeDefined();
  });
  test("Debe retornar un boolean", () => {
    expect(typeof random()).toBe("boolean");
  });
});
