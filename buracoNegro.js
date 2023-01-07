/*Esse modelo foi criado com base no livro
Introdução à Astronomia
Leis de Newton e
Forças Gravitacionais - Rogério Riffel

*/
const BuracoNegro = function(x, y , massa){
    this._CONSTATE_GRAVITACIONAL = 6.674e-11; 
    this.massa = massa;
    this.x = x;
    this.y = y;

    //Retorna o calculo da força gravicational exercida pelo buraco negro em um objeto
    this.forcaGravitacional = (massaObjeto, distancia)=>{
        return ( _CONSTATE_GRAVITACIONAL * this.massa * massaObjeto) / Math.pow(distancia, 2)
    }

    //Retorna a aceleração gravitacional do objeto que está em curso de um buraco negro
    this.aceleracaoGravitacional(massaObjeto, distancia) {
        return this.forcaGravitacional(massaObjeto, distancia) / massaObjeto;
      }

}