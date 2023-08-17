import React, { useState } from 'react';

function contar() {
  
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 5)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>

      
    </div>
  );
}
export default contar