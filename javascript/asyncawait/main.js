// fetch('https://ranekapi.origamid.dev/json/api/produto')
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonBody) => {
//     console.log(jsonBody[0]);
//   });

async function fetchProdutos(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

// Promise
const requisicao = fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto',
);

requisicao.then((jsonBody) => {
  // O Json já está ai pronto, resolvido na função fetchProdutos.
});
