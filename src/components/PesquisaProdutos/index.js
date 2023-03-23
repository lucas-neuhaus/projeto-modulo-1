import { useState } from "react";
import CarrinhoDeCompras from "../CarrinhoDeCompras";
import "./styles.css";


export default function PesquisaProdutos() {
  const [produtos, setProdutos] = useState([
    { "codigo": 1001, "descricao": "Televisão 32 polegadas", "marca": "ACME", "preco": 998.00, "imagem": "" },
    { "codigo": 1002, "descricao": "Tablet", "marca": "ACME", "preco": 815.00, "imagem": "" },
    { "codigo": 1003, "descricao": "Aparelho Celular", "marca": "ACME", "preco": 777.70, "imagem": "" },
    { "codigo": 1004, "descricao": "Mesa", "marca": "Lannister", "preco": 557.70, "imagem": "" },
    { "codigo": 1005, "descricao": "Caderno", "marca": "Escriba", "preco": 20.00, "imagem": "" },
    { "codigo": 1006, "descricao": "Caneta Azul", "marca": "Escriba", "preco": 2.00, "imagem": "" },
    { "codigo": 1007, "descricao": "Lápis Preto", "marca": "Escriba", "preco": 1.50, "imagem": "" },
    { "codigo": 1008, "descricao": "Borracha", "marca": "Escriba", "preco": 0.80, "imagem": "" },
    { "codigo": 1009, "descricao": "Grampeador", "marca": "Escriba", "preco": 12.35, "imagem": "" },
    { "codigo": 1010, "descricao": "Camiseta Preta", "marca": "Horizon", "preco": 59.90, "imagem": "" },
    { "codigo": 1011, "descricao": "Camiseta Branca", "marca": "Horizon", "preco": 59.90, "imagem": "" },
    { "codigo": 1012, "descricao": "Geladeira", "marca": "ACME", "preco": 1032.00, "imagem": "" },
    { "codigo": 1013, "descricao": "Fogão", "marca": "ACME", "preco": 504.00, "imagem": "" },
    { "codigo": 1014, "descricao": "Copo de Vidro", "marca": "Glass", "preco": 12.00, "imagem": "" },
    { "codigo": 1015, "descricao": "Ampulheta", "marca": "Hour", "preco": 55.00, "imagem": "" },
    { "codigo": 1016, "descricao": "Travesseiro", "marca": "Nuvem", "preco": 23.00, "imagem": "" }
  ]);
  const [carrinho, setCarrinho] = useState([]);
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
