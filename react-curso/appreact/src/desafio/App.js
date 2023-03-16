import Home from "./Home";
import Menu from "./Menu";
import Produtos from "./Produtos";


// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


const App = () => {
  const { pathname } = window.location;
  const isPageProdutos = pathname === '/produtos'

  return (
    <>
    <Menu />
    <h1 style={{color: 'green'}}>
      {isPageProdutos ? 'Produtos' : 'Home'}
    </h1>
    {isPageProdutos && <Produtos /> ||
    <Home />}
    </>
  )
}


export default App