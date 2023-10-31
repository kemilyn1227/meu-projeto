import Button from './evento/button'

function Eventos({numero}){

    function meuEvento(){
        console.log(`fui ativado ${numero +=1}`)

    }

    function evento2(){
        window.alert('evento 2 ativado')
    }
    return(

        <div>
            <p>clique para disparar um evento</p>
            <Button event={evento2} text='primeiro evento'/>
            
            <Button event={evento2} text='segundo evento'/>
            <button onClick={meuEvento}> ativar</button>
        </div>

    )
}

export default Eventos 