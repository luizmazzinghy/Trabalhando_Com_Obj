import React, { useState, useEffect } from 'react';

const GeradorNumeros = () => {
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    const gerarNumeros = () => {
      const numerosGerados = [];
      const quantidadeNumeros = 6; 

      while (numerosGerados.length < quantidadeNumeros) {
        const novoNumero = Math.floor(Math.random() * 60) + 1; 

        if (!numerosGerados.includes(novoNumero)) {
          numerosGerados.push(novoNumero);
        }
      }

      setNumeros(numerosGerados);
    };

    gerarNumeros();
  }, []);

  return (
    <div>
      <h2>Números Gerados</h2>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default GeradorNumeros;
