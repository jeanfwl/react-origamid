import numeroAleatorio from './numeroAleatorio.js';

function circunferencia(raio) {
  return 2 * raio * Math.PI;
}

function aleatorio() {
  return numeroAleatorio();
}

function area(raio) {
  return raio * raio * Math.PI;
}

const Circulo = {
  circunferencia,
  area,
  aleatorio,
};

export default Circulo;
