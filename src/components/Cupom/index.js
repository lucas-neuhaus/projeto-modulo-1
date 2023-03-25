//import { useState } from "react";
import "./styles.css" 


export default function Cupom({itensCupom}) {
  
  const total = itensCupom.reduce((acc, item) => acc + item.precoFinal, 0);

  return (
    <div className="cupom">
      <h3 className="tituloCupom">Cupom Fiscal</h3>
      <table className="tabela-cupom">
        <thead>
          <tr>
            <th>OP</th>
            <th>Cód.</th>
            <th>Produto</th>
            <th>Preço Unit.</th>
            <th>Qtd</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {itensCupom.map((item, index) => (
            <tr key={index}>
              <td>+</td>
              <td>{item.codigo}</td>
              <td>{item.descricao}</td>
              <td>R$ {item.preco}</td>
              <td>{item.quantidade}</td>
              <td>R$ {item.precoFinal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">Total: R$ {total}</p>
    </div>

  );
}