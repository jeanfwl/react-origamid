//Promise
fetch('https://ranekapi.origamid.dev/json/api/produto')
  // return response.json() retorna uma Promise, portanto podemos encadear outro then()
  .then((response) => {
    return response.json();
  })
  .then((jsonBody) => {
    console.log(jsonBody[0]);
  });

// Para enviar uma requisição com dados, usaremos um objeto no segundo parâmetro com as opções desejadas, cabeçalho, corpo, método e etc

const data = {
  id: 'andrerafa',
  nome: 'Andre',
  email: 'andrerafa@origamid.com',
  senha: '123456',
  cep: '123456',
  rua: 'Ali Perto',
  numero: '230',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  estado: 'Rio de Janeiro',
};

fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  //obs.: sempre mandaremos dados como string, portanto não podemos escrever um json direto na key body, e por isso já tem o JSON.stringify();
  body: JSON.stringify(data),
});
