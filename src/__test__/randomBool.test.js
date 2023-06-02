test("Revisa si se asigna true cuando random es mayor a 0.5", () => {
  const random = Math.random();
  const bool = random > 0.5;
  expect(bool).toBe(random > 0.5);
});

/*
test('representación de la célula' , () => {
  if(this.estado === true) {
    expect('*').toBe(true);
  }
  else {
    expect('.').toBe(true);
  }
}); 
*/
