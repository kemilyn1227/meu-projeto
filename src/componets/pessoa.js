import styles from './frase.module.css'

function Pesoa({nome, idade, sexo}){
    return(
        <div>
            <h2 className = {styles.Azul}>nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>sexo: {sexo}</p>
        </div>
    )
}

export default Pesoa