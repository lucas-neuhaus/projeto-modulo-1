import {useEffect, useState} from "react";
  import Produtos from "./components/Produtos";
  import Cabecalho from "./components/Cabecalho";
  import PesquisaProdutos from "./components/PesquisaProdutos";
  import Cupom from "./components/Cupom";
  import "./App.css";
  
  function App() {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [cupom, setCupom] = useState([])

    useEffect(() => {
      fetch("produtos.json")
        .then((resp) => resp.json())
        .then((dados) => setProdutos(dados))
        .catch((erro) => console.log(erro));
    }, []);
  
    useEffect(() => {
      const itensCarrinho = carrinho.map((item) => ({
        ...item,
        precoFinal: item.preco * item.quantidade,
      }));
      setCupom(itensCarrinho);
    }, [carrinho]);

    

    return (
      <section className="App">
          <Cabecalho /> 
      <section>
            <div className="container-produtos"> <PesquisaProdutos produtos={produtos} carrinho={carrinho} setCarrinho={setCarrinho}/> 
              </div> 
            <div className="lista-produtos">
              <h3 className="subtituloProdutos"> Produtos </h3>
                {
                  produtos.map(prod => <Produtos key={prod.codigo} codigo={prod.codigo} descricao={prod.descricao} 
                    marca={prod.marca} preco={prod.preco} imagem={prod.urlImagem}  />)
                  }    
              </div> 
            <Cupom itensCupom={cupom}/>
            </section>
          </section>
          );
    }

  export default App;
