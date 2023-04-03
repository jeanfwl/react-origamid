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
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return { ...acc, [pergunta.id]: '' };
    }, {}),
  );
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const acertos = perguntas.filter(({ resposta, id }) => {
      return respostas[id] === resposta;
    }).length;

    setResultado(`Você acertou ${acertos} de ${perguntas.length}`);
  }

  function handleClick() {
    setSlide(slide + 1);
    if (slide + 1 >= perguntas.length) resultadoFinal();
  }

  return (
    <div>
      {perguntas.map((pergunta, index) => (
        <Pergunta
          key={pergunta.id}
          hasToShow={slide === index}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <p>
          <button onClick={handleClick}>Enviar</button>
        </p>
      )}
    </div>
  );
};

export default App;
