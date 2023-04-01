//import { useState } from "react";
import "./styles.css" 


export default function Cupom({itensCupom, itensCupomEstorno}) {
  const totalEstorno = itensCupomEstorno.reduce((acc, item) => acc + item.precoFinal, 0);
  const total = itensCupom.reduce((acc, item) => acc + item.precoFinal, 0) - totalEstorno;

  return (
    <div className="cupomContainer">
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
        <tbody className="prodCupom">
          {itensCupom.map((item, index) => (
            <tr key={index}>
              <td>{item.operacao}</td>
              <td>{item.codigo}</td>
              <td>{item.descricao}</td>
              <td>R${item.preco.toFixed(2)}</td>
              <td>{item.quantidade}</td>
              <td>R${item.precoFinal.toFixed(2)}</td>
            </tr>
          ))}
          {itensCupomEstorno.map((item, index) => (
            <tr key={index}>
              <td>{item.operacaoDel}</td>
              <td>{item.codigo}</td>
              <td>{item.descricao}</td>
              <td>R${item.preco.toFixed(2)}</td>
              <td>{item.quantidade}</td>
              <td>R${item.precoFinal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">Total: R$ {total}</p>
    </div>

  );
}