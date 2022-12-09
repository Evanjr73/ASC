import React, { useState } from 'react';
// import spicos from '../styles/picos.module.css'
function Examp3() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(' ');
  const set = ()=> setCount("Em seus melhores dias é um dos melhores picos de surf da cidade localizada mais ao norte da praiada costa , gera boas onda rapidas e cavadas ")
  return (
    <div className='hock'>
      <p>{count}</p>
      <button onClick={set} >
        Clique aqui
      </button>

    </div>
  );
}


export default Examp3