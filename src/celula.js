class Celula {
  constructor(vida, vecinos) {
    this.vida = vida;
    this.vecinos = vecinos;
  }

  estaViva() {
    return this.vida;
  }

  cambiarVida(nuevaVida) {
    this.vida = nuevaVida;
  }

  obtenerVecinos() {
    return this.vecinos;
  }

  cambiarVecinos(nuevosVecinos) {
    this.vecinos = nuevosVecinos;
  }

  representarCelula() {
    if (this.vida) {
      return ".";
    } else {
      return "*";
    }
  }
}

/*class EstadoCelula {

    /*constructor(n){
        this.n = n;
    }
    
    obtenerEstado(){
      let estado;
        if(this.n > 0.5){
          estado = '*';
        }else{
          estado = '.';
        }
        return estado;
    }
    
    cambiarEstado(){}

}


  */

module.exports = { Celula };
