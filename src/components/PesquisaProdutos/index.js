import { useState } from "react";
import {ToastContainer, toast } from "react-toastify";
import CarrinhoDeCompras from "../CarrinhoDeCompras";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function PesquisaProdutos ({ produtos, carrinho, setCarrinho, handleExcluirItem }) {
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  
  function adicionarProduto() {
    const prod = produtos.find((p) => p.codigo === parseInt(codigo));
    if (!prod) {
      toast.error(`Produto com código ${codigo} não encontrado!`);
      return;
    }
    
    const prodNoCarrinho = carrinho.find((item) => item.codigo === prod.codigo);
    if (prodNoCarrinho) {
      toast.warn(`Produto com código ${codigo} já está no carrinho`);
      return;
    }
    
    const novoItem = {
      codigo: prod.codigo,
      descricao: prod.descricao,
      marca: prod.marca,
      preco: prod.preco,
      imagem: prod.imagem,
      quantidade: quantidade,
      operacao: "+",
      operacaoDel:"-"
    };
    setCarrinho([...carrinho, novoItem]);
    setCodigo("");
    toast.success("Produto adicionado ao carrinho!");
  }


  return (

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

      <div className="carrinho-container">
       <div className="subtituloCarrinho"> <h3> Carrinho de Compras</h3> </div>
       <div className="produtosCarrinho">
        {carrinho.map((item) => (
          <CarrinhoDeCompras
            codigo={item.codigo}
            descricao={item.descricao}
            marca={item.marca}
            preco={item.preco.toFixed(2)}
            imagem={item.imagem}
            quantidade={item.quantidade}
            onDelete={handleExcluirItem}
            operacao={item.operacao}
            operacaoDel={item.operacaoDel}
            key={item.codigo}
          />
          ))}
        </div>
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </section>
  );
}
