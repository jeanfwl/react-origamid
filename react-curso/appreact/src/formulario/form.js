import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

// const App = () => {
//   const [nome, setNome] = React.useState('');
//   const [email, setEmail] = React.useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input
//         type="text"
//         id="nome"
//         value={nome}
//         onChange={({ target }) => setNome(target.value)}
//       />
//       <p>{nome}</p>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={({ target }) => setEmail(target.value)}
//       />
//       <p>{email}</p>
//       <button>Enviar</button>
//     </form>
//   );
// };

// const App = () => {
//   const [form, setForm] = React.useState({
//     nome: '',
//     email: '',
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event);
//   }

//   function handleChange({ target }) {
//     const { id, value } = target;
//     setForm({ ...form, [id]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" value={form.nome} onChange={handleChange} />
//       <p>{form.nome}</p>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <p>{form.email}</p>
//       <button>Enviar</button>
//     </form>
//   );
// };

// const App = () => {
//   const [textarea, setTextarea] = React.useState('');

//   return (
//     <form>
//       <label htmlFor="obs">Observação</label>
//       <textarea
//         id="obs"
//         rows="5"
//         value={textarea}
//         onChange={({ target }) => setTextarea(target.value)}
//       />
//     </form>
//   );
// };

// const App = () => {
//   const [select, setSelect] = React.useState('');

//   return (
//     <form>
//       <select value={select} onChange={({ target }) => setSelect(target.value)}>
//         <option disabled value="">
//           Selecione um produto
//         </option>
//         <option value="notebook">Notebook</option>
//         <option value="smartphone">Smartphone</option>
//         <option value="tablet">Tablet</option>
//       </select>
//       {select}
//     </form>
//   );
// };

// const App = () => {
//   const [produto, setProduto] = React.useState('');
//   const [cor, setCor] = React.useState('');

//   return (
//     <form>
//       <h2>Cores</h2>
//       <label>
//         <input
//           type="radio"
//           value="azul"
//           checked={cor === 'azul'}
//           onChange={({ target }) => setCor(target.value)}
//         />
//         Azul
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="vermelho"
//           checked={cor === 'vermelho'}
//           onChange={({ target }) => setCor(target.value)}
//         />
//         Vermelho
//       </label>
//       <h2>Produtos</h2>
//       <label>
//         <input
//           type="radio"
//           value="notebook"
//           checked={produto === 'notebook'}
//           onChange={({ target }) => setProduto(target.value)}
//         />
//         Notebook
//       </label>
//       <label>
//         <input
//           type="radio"
//           value="smartphone"
//           checked={produto === 'smartphone'}
//           onChange={({ target }) => setProduto(target.value)}
//         />
//         Smartphone
//       </label>
//     </form>
//   );
// };

// const App = () => {
//   const [termos, setTermos] = React.useState(false);

//   return (
//     <form>
//       {termos && <p>Aceitou os termos</p>}
//       <label>
//         <input
//           type="checkbox"
//           value="Termos"
//           checked={termos}
//           onChange={({ target }) => setTermos(target.checked)}
//         />
//         Aceito os termos do site.
//       </label>
//     </form>
//   );
// };

// const App = () => {
//   const [cores, setCores] = React.useState([]);

//   function handleChange({ target }) {
//     if (target.checked) {
//       setCores([...cores, target.value]);
//     } else {
//       setCores(cores.filter((cor) => cor !== target.value));
//     }
//   }

//   return (
//     <form>
//       <label>
//         <input
//           type="checkbox"
//           value="azul"
//           checked={cores.includes('azul')}
//           onChange={handleChange}
//         />
//         Azul
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value="vermelho"
//           checked={cores.includes('vermelho')}
//           onChange={handleChange}
//         />
//         Vermelho
//       </label>
//     </form>
//   );
// };

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');

  const [cor, setCor] = React.useState('');
  const [pelicula, setPelicula] = React.useState('');

  const [termos, setTermos] = React.useState([]);
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <h3>Termos</h3>
      <Checkbox
        options={['Li e aceito os termos']}
        value={termos}
        setValue={setTermos}
      />
      <h3>Linguagens de Programação</h3>
      <Checkbox
        options={['Javascript', 'C#', 'Python']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h3>Cores</h3>
      <Radio options={['Azul', 'Amarelo']} value={cor} setValue={setCor} />
      <h3>Película</h3>
      <Radio
        options={['Escura', 'Violeta', 'Transparente']}
        value={pelicula}
        setValue={setPelicula}
      />

      <Select
        options={['Tablet', 'Smartphone']}
        value={produto}
        setValue={setProduto}
        emptyText="Selecione um produto"
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
