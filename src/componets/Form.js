import {useState} from 'react'

function Form(){

    // e = evento submisão

    function cadatrarUsuario(e){
        
        e.preventDefault() //ele não envia o formulário 

       console.log(`o usuário ${name} foi cadastrado com a senha ${password}`)
    }

    //name = valor inicial , setname = valor alterado

    const [ name, setName ] = useState()
    const [ password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadatro alt</h1>
       
            <form onSubmit={cadatrarUsuario}>
                <div>
                    <label htmlFor="name">nome:</label>
                    <input 
                     type="text"
                     placeholder = 'digite seu nome ' 
                     name='name' 
                     id='name'
                     onChange= {(e) => setName(e.target.value)}/> 
                     {/*a cada letra adicionada o valor sera alterado*/}
                </div>

                <div>
                    <label htmlFor="password">senha:</label>
                    <input
                     type="password"
                     id='password'
                     name ='password'
                     placeholder='digite sua senha' 
                     onChange={(e)=> setPassword(e.target.value)}/>
                
                </div>
                <div>
                    <input type="submit" value= 'cadatrar'/>
                </div>
            </form>
           
        </div>
    )
}

export default Form