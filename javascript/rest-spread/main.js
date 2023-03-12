//Antes de tudo, precisamos entender que "o" operador é o mesmo para
//as funções rest e spread. O operador é "..."

// rest -> algo como juntar
// spread -> algo como espalhar

//Um exemplo de rest
{
  function showEmployees(empCod, ...names) {
    //names agora é um array.
    console.log(empCod);
    console.log(names);
  }

  // e respectivamente podemos passar valores individuais como parâmetro
  // no final será ['Jean', 'Paulo', 'Maurício']
  showEmployees('1', 'Jean', 'Paulo', 'Maurício');
}

//Um exemplo de spread
{
  const numbers = [1, 21, 35, 2, 3, 12, 34];

  // Math.max() recebe uma sequência de números, não pode receber um array
  // mas usando o spread operador no array numbers, teremos uma sequência.
  console.log(Math.max(numbers));
  console.log(Math.max(...numbers));
}

{
  // spread (contexto: espalhando os itens dentro de um array)
  // Podemos usar o spread operator para usar métodos únicos de array para um Array-like em uma conversão rapida: [...array-like]
  const arrayElements = [...document.querySelectorAll('li')].map(
    (li) => li.innerText,
  );

  console.log(arrayElements);
}

// Trabalhando com clonagem de objetos
{
  const carro = {
    cor: 'azul',
    portas: 2,
  };

  const carroClonePuro = carro;

  const carroClone = {
    ...carro,
    turbo: true, // podemos extender o objeto
  };

  console.log(carro);
  console.log(carroClone);
  //false
  console.log(carro === carroClone);
  //true
  console.log(carro === carroClonePuro);

  // Ou seja, se quisermos criar um NOVO objeto com base em outro, com outro endereço em memória, basta usar o spread.
  // Lembrando que ele vai perder o protótipo de um objeto que foi construido com uma outra Classe, por exemplo, isso porque estamos apenas espalhando suas PROPRIEDADES.
}
