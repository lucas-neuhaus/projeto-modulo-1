import { useState } from "react";
import CarrinhoDeCompras from "../CarrinhoDeCompras";
import "./styles.css";

export default function PesquisaProdutos ({ produtos, carrinho, setCarrinho }) {
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  
  
  function adicionarProduto() {
    const prod = produtos.find((p) => p.codigo === parseInt(codigo));
    if (!prod) {
      alert(`Produto com código ${codigo} não encontrado`);
      return;  
    }
    
    const novoItem = {
      codigo: prod.codigo,
      descricao: prod.descricao,
      marca: prod.marca,
      preco: prod.preco,
      imagem: prod.imagem,
      quantidade: quantidade,
    };
    setCarrinho([...carrinho, novoItem]);
    setCodigo("");
  }

  const handleDeleteItem = (codigo) => {
    setCarrinho(carrinho.filter(item => item.codigo !== parseInt(codigo)));
  }
  
  return (
    <>
    <section className="container">
      <div className="pesquisa-produtos">
        <h3>Pesquisar Produtos</h3>
      </div>

      <div className="pesquisa-produto-container">
        <label htmlFor="codigo">Código do Produto:</label>
        <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

        <label htmlFor="quantidade">Quantidade:</label>
        <input type="number" min="1" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />

        <button type="button" onClick={adicionarProduto}> Adicionar </button>
      </div>
      </section>

      <div className="carrinho-container">
       <div className="subtituloCarrinho"> <h3> Carrinho de Compras</h3> </div>
        {carrinho.map((item) => (
          <CarrinhoDeCompras
            codigo={item.codigo}
            descricao={item.descricao}
            marca={item.marca}
            preco={item.preco}
            imagem={item.imagem}
            quantidade={item.quantidade}
            onDelete={handleDeleteItem}
            key={item.codigo}
          />
          ))}
      </div>
    </>
  );
}
