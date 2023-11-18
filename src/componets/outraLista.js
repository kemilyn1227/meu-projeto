function outraLista({itens}){

    return(
        <>
           <h3>Lista De coisas boas</h3>

           {itens.length > 0 ? (
            itens.map((item, index) =>(
                <p key={index}>{item}</p>
            ))) :(
                <p>nao há itens cadastrados</p>
            )}
            
        </>
    )

}

export default outraLista