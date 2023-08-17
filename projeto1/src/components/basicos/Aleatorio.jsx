import React from "react";

const Aleatorio = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong>1</p>
      <p><strong>Valor Máximo: </strong>60</p>
      <p><strong>Valor Escolhido</strong> {random(1, 60)}</p>
      
    </div>
  );
};

export default Aleatorio;
