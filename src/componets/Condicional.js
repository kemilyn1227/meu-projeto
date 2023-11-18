import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setEmail('')
    }

    return(
        <div>
            
            <h2>cadastre o seu email</h2>
            <form>
                <input type="email" placeholder='digite seu email' onChange={(e)=> setEmail(e.target.value)} />
                <button onClick={enviarEmail} type='submit'>enviar e-mail</button>

                {/* do && para frente é oque sera executado caso o useremail for true*/}
                {userEmail &&(
                    <div>
                        
                        <p>o email de usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>limpar email</button>
                    </div>
                )}
            </form>

            
        </div>

    )

}

export default Condicional