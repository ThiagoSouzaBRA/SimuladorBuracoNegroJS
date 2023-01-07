/*Esse modelo foi criado com base no livro
Introdução à Astronomia
Leis de Newton e
Forças Gravitacionais - Rogério Riffel
*/

const CONSTATE_GRAVITACIONAL = 6.674e-11;

const BuracoNegro = function(x, y , massa){
    /* Criterios:
        Massa precisa ser maior que 0;
        Coordenadas precisam existir
    */

    this.x = x;
    this.y = y;

    this.massa = massa;
    //Retorna o calculo da força gravicational exercida pelo buraco negro em um objeto
    this.forcaGravitacional = (massaObjeto, distancia)=>{
        return ( CONSTATE_GRAVITACIONAL * this.massa * massaObjeto) / Math.pow(distancia, 2)
    }

    //Retorna a aceleração gravitacional do objeto que está em curso de um buraco negro
    this.aceleracaoGravitacional = (massaObjeto, distancia) => {
        return this.forcaGravitacional(massaObjeto, distancia) / massaObjeto;
      }

    //Retorna o valor da força gravitacional exercida pelo buraco negro em objetos com diferentes posições
    this.calcularForcaDe = (x, y) =>{
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }

    //Retorna a velocidade de escape do buraco negro
    this.velocidadeDeEscape = () =>{
        return Math.sqrt((CONSTATE_GRAVITACIONAL * 2 * this.massa) / this.calcularForcaDe(0, 0));
    }

}
