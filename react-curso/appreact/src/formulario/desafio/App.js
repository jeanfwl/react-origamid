import React from 'react';
import Pergunta from './Pergunta';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [pergunta, setPergunta] = React.useState(perguntas[0]);
  const [resposta, setResposta] = React.useState(null);
  const [acertos, setAcertos] = React.useState(0);

  function handleClick() {
    if (resposta === pergunta.resposta) {
      setAcertos(acertos + 1);
    }

    const indexPergunta = perguntas.indexOf(pergunta);

    setResposta(null);
    if (indexPergunta + 1 >= perguntas.length) {
      setPergunta(null);
    } else {
      setPergunta(perguntas[indexPergunta + 1]);
    }
  }

  return (
    <div>
      {pergunta && (
        <>
          <Pergunta
            dados={pergunta}
            resposta={resposta}
            setResposta={setResposta}
          />

          <p>
            <button onClick={handleClick}>Próxima</button>
          </p>
        </>
      )}
      {!pergunta && (
        <p>
          Acertou {acertos} de {perguntas.length}
        </p>
      )}
    </div>
  );
};

export default App;
