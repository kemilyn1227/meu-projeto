import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'

import Empresa from './pages/empresa'

import Contato from './pages/Contato'

import NavBar from './componets/Layout/NavBar'

import Footer from './componets/Layout/Footer'

function App() {

  
  return (

      <Router> {/* abrir links diferentes ssem o reload*/}
      
      <NavBar/>
    {/*exact precisa ser exatamente como esta escrito*/}

   <Routes>
    <Route  exact path='/' element= {<Home/>}></Route>

    <Route  exact path='/contatoteste' element = {<Contato/>}></Route>

    <Route  exact path='/empresa' element = {<Empresa/>}></Route>

    

   </Routes>
   <Footer/>
    </Router>
  )
  }

export default App;
