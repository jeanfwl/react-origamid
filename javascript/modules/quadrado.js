// quando fazemos múltiplos export assim, onde iremos importar precisamos usar o mesmo nome da função.

export function area(l) {
  return l * l;
}

export function perimetro(l) {
  return l * 4;
}

// caso usemos export default, podemos definir qualquer nome onde estamos importando
