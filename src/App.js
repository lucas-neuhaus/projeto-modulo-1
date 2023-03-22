  import Produtos from "./components/Produtos";
  import Cabecalho from "./components/Cabecalho";
  import PesquisaProdutos from "./components/PesquisaProdutos";
  import CarrinhoDeCompras from "./components/CarrinhoDeCompras";
  import "./App.css";
  //import { useState } from "react";

  const produtos = [
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
    ];
  



  function App() {
    return (
      <div className="App">
          
          <Cabecalho /> 
            
            <section className="container">
            <div className="container-produtos"> <PesquisaProdutos /> 
            </div>
            
            <div className="lista-produtos">
              <h3 className="subtituloProdutos"> Produtos </h3>
                {
                  produtos.map(prod => <Produtos key={prod.codigo} codigo={prod.codigo} descricao={prod.descricao} 
                    marca={prod.marca} preco={prod.preco} imagem={prod.urlImagem} />)
                }    
              
              </div> 
              </section>
      </div>
          );
    }

  export default App;
