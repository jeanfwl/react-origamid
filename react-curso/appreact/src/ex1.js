// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};
  
const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const App = () => {
    const dados = mario;

    function getTotal(compras) {
        const precos = compras.map(compra => compra.preco);
        const precosNumero = precos.map(preco => +preco.replace('R$ ', ''));
        return precosNumero.reduce((acc, preco) => acc + preco);
    }

    const totalCompras = getTotal(dados.compras);

    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
            <p>Total gasto: R$ {totalCompras}</p>
            {totalCompras > 10000 ? <p>Você está gastando muito</p> : ''}
        </div>
    )
};

export default App