import React, { useState } from 'react';


function Examp2() {
    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [count, setCount] = useState(' ');
    const set = ()=> setCount("A primeira praia mais a sul da praia da costa localizada na vila de atalia , que contem boas condições geralmente melhor que a costa , com suas ondas mais cavadas e alihadas")
    return (
      <div >
        <p>{count}</p>
        <button onClick={set} >
          SOBRE
        </button>
  
      </div>
    );
  }

export default Examp2