import styles from './frase.module.css'

function frase(){
    return(
        <div className = {styles.FraseContainer}>
            <p className = {styles.FraseContent}>este é um componente com uma frase</p>
            <p className = {styles.Azul}>ola</p>
        </div>
    )
}

export default frase