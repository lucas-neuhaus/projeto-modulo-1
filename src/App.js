import {useEffect, useState} from "react";
import Produtos from "./components/Produtos";
import Cabecalho from "./components/Cabecalho";
import PesquisaProdutos from "./components/PesquisaProdutos";
import Cupom from "./components/Cupom";
import "./App.css";

  
function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [cupom, setCupom] = useState([]);
  const [estornos, setEstornos] = useState([]);

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
    const itensEstornos = estornos.map((item) => ({
      ...item,
      precoFinal: item.preco * item.quantidade,
    }));
    setCupom([...itensCarrinho, ...itensEstornos]);
  }, [carrinho, estornos]);

  const handleAdicionarItem = (item) => {
    setCarrinho((carrinhoAnt) => {
      const itemExiste = carrinhoAnt.find(
        (produto) => produto.codigo === item.codigo
      );
      if (itemExiste) {
        return carrinhoAnt.map((produto) =>
          produto.codigo === item.codigo
            ? { ...produto, quantidade: produto.quantidade + item.quantidade}
            : produto
        );
      } else {
        return [...carrinhoAnt, item];
      }
    });
  };

  const handleExcluirItem = (codigo) => {
    const itemExiste = carrinho.find(
      (produto) => produto.codigo === parseInt(codigo)
    );
    if (itemExiste) {
      const precoFinal = itemExiste.preco * itemExiste.quantidade;
      setEstornos([...estornos, { ...itemExiste, precoFinal }]);
      setCarrinho((carrinhoAnt) =>
        carrinhoAnt.filter(
          (produto) => produto.codigo !== parseInt(codigo)
        )
      );
    }
  };

  return (
    <section className="App">
      <section>
        <Cabecalho />
        <div className="cupom-container">
          <Cupom
            itensCupom={cupom}
            itensCupomEstorno={estornos}
          />
        </div>
        <div className="container-pesquisa-produtos">
          <PesquisaProdutos
            produtos={produtos}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            handleAdicionarItem={handleAdicionarItem}
            handleExcluirItem={handleExcluirItem}
          />
        </div>
      </section>

      <section>
        <div className="lista-produtos">
          <h3 className="subtitulo-produtos"> Produtos </h3>
          {produtos.map((prod) => (
            <Produtos
              key={prod.codigo}
              codigo={prod.codigo}
              descricao={prod.descricao}
              marca={prod.marca}
              preco={prod.preco.toFixed(2)}
              imagem={prod.urlImagem}
              handleAdicionarItem={handleAdicionarItem}
            />
          ))}
        </div>
      </section>
        
    </section>  
);
}

export default App;