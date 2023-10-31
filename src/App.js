
import './App.css';

import HelloWorld from './componets/HelloWorld';

import SayMyName from './componets/SayMyName'

import List from './componets/list'

import Evento from './componets/Eventos'

import Form from './componets/Form'

import Condicional from './componets/Condicional'


//elemento completo dentro da funçao app

function App() {

  {/* const name = 'matheus '

  const newname = name.toUpperCase()

  const num = 2

  const url ='https://via.placeholder.com/150'

  function soma(a,b){
    return a +b
  }

  function édois(){
    if(num === 2){
      return 'é dois'
    }else{
      return 'nao é dois'
    }

  }*/}

  const name = 'maria'

  
  return (

    //precisa retornar apenas 1 elemento pai neste caso a div

    //quando se for adicionar uma classe utilizar className pois class é uma palavra reservado do react

    <div className="App">

      {/*   <h2>alterando jsx</h2>
      <p>olá, {newname}</p>
      <p>soma: {soma(1,1)}</p>
      <p>o número é dois ? {édois()}</p>
  <img src={url} alt="" 

     <h1>testando o css</h1>

    
      <HelloWorld />
      <SayMyName nome='kemilyn'/>
      <SayMyName nome ={name}/>
      <List/>*/}

      <h1>testando eventos</h1>
      <Evento numero = {1}/>
      <Form/>
      <Condicional/>
     
      
    </div>
  );
  }

export default App;
