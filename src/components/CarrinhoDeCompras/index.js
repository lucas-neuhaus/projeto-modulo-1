//import Cupom from "../Cupom";
import "./styles.css";

export default function CarrinhoDeCompras( { codigo, descricao, marca, preco, imagem, quantidade, onDelete} ) {
    const handleExcluir = () => {
        onDelete(codigo);  
      }
    
    
  return (
    <div className="foto-produto">
        <img src={imagem} alt="foto do produto" className= "produto-img" />
        <div>
            Código: {codigo}
        </div>
        <div className="produto-descricao">
            {descricao}
        </div>
        <div>
            Marca: {marca}
        </div>
        <div>
            R$ {preco}
        </div>
        <div>
            Qtde: {quantidade}
        </div>
        <button className="botao" onClick={handleExcluir}>Excluir</button>
    </div>
  )
}