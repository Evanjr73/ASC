import React, { useState } from 'react';
// import spicos from '../styles/picos.module.css'


function Examp() {

  const [count, setCount] = useState(' ');
  const set = ()=> setCount("A primeira praia q vemos quando chegamos na ilha de Atalaia , geralmente mais frequentadada pelos surfistas locais por causa da condições boas para o surf e pelo seu palanque de surf q facilita a visualização das ondas")
  return (
    <div className='hock'>
      <p>{count}</p>
      <button onClick={set} >
        Sobre
      </button>

    </div>
  );
}


export default Examp