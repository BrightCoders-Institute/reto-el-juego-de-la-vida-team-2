//const { randomBool } = require("./test/Utils");


test( 'Asigna booleano con base en el Math Random' , () => { //Descripcion tentativa
    const random = Math.random();
    random > 0.5 
        ? expect(random).toBeTruthy()
        : expect(random).toBeFalsy(); 
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