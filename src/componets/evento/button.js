function Button(props){

    //caso o codigo não pegue mais de uma linha não precisa do ()
    return <button onClick={props.event}>{props.text}</button>
}

export default Button