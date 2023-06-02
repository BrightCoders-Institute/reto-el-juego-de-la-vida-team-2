const randomBool = require("../Utils");
const random = jest.fn(randomBool);

describe("Random bool", () => {
  test("Debe retornar", () => {
    random();
    expect(randomBool()).toHaveReturned();
  });
});
