
//precisa ser reutilizavel
import Frase from './frase'

import Pessoa from './pessoa'


function HellWorld (){
    return(
        <div>
            <Frase />
            <h1>meu primeiro componente</h1>
            <Frase />
            <Frase />
                <Pessoa
                nome='kemilyn' 
                idade ='20' 
                sexo='feminino'/>
        </div>
    )
}

export default HellWorld