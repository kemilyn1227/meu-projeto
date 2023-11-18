function SeuNome({setNome}){
    return(
        <div>
            <p>digite seu nome</p>
            <input type="text" placeholder="qual é o seu nome " onChange={(e)=> setNome(e.target.value)}/>
        </div>

    )
}

export default SeuNome

{/*


import './App.css';

import { useState } from 'react';

import SeuNome from './componets/seuNome';

import Saudacao from './componets/Saudacao';



function App() {


  const [nome, setNome] = useState()

  
  return (


    <div className="App">

      <h1>State lift</h1>

      <SeuNome setNome={setNome}/>

      <Saudacao nome={nome}/>

    </div>
  );
  }

export default App;

*/}