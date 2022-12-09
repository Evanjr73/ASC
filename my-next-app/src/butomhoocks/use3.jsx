import React, { useState } from 'react';
// import spicos from '../styles/picos.module.css'
function Examp4() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(' ');
  const set = ()=> setCount("A prais intitulada de forte de canes , fica bem ao norte , bem perto da barra que sempre está com as melhores condições da cidade , não é muito movimentada pelos surfistas locais por sua distância , mas com certeza vale a ida")
  return (
    <div className='hock'>
      <p>{count}</p>
      <button onClick={set} >
        Sobre
      </button>

    </div>
  );
}


export default Examp4