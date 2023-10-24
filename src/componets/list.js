import Item from './Item.js'

function List(){
    return(
        <>
        <h1>minha lista</h1>

            <ul>
                <Item marca = 'luisvitton' AnoLançamento = {1995}/>
                <Item marca = 'gucci'  AnoLançamento = {1993}/>
                <Item marca = 'renault' AnoLançamento={ 1980}/>
                <Item marca= 'toyota' AnoLançamento={2000}/>
                <Item/>
            </ul>
            
        </>
    )
}

export default List