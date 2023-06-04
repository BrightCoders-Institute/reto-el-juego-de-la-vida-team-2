class Celula {
  vecinos; //Vecinos con estado === true (vivos)

  constructor(estado) {
    this.estado = estado; //true = vivo
    this.vecinos = 0;
  }

  representacionCelula() {
    if (this.estado) {
      //Viva
      return "*";
    } else {
      //Muerta
      return ".";
    }
  }

  estadoGen2() {
    let estadoGen2 = this.estado;
    if (this.estado) {
      //vivo
      if (this.vecinos !== 2 && this.vecinos !== 3) {
        estadoGen2 = false;
      }
    } else {
      //muerto
      if (this.vecinos === 3) {
        estadoGen2 = true;
      }
    }
    return estadoGen2;
  }
}

module.exports = { Celula };
