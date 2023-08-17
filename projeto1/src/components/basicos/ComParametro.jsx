import React from "react";

export default function ComParametro(props) {
  let status;

  if (props.nota >= 7) {
    status = "Aprovado";
  } else {
    status = "Recuperacao";
  }
  const notaInt = (props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaInt} </strong>e está
        <strong> {status}</strong>!
      </p>
    </div>
  );
}
