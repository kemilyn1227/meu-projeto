import PropTypes from 'prop-types'

function Item({marca, AnoLançamento}){

    return (
        <>

        <li>
            {marca} - {AnoLançamento}
            </li>
       
        
        </>
    )


}

//valida a props

Item.propTypes = {

    //precisa ser string
    marca: PropTypes.string.isRequired,
    //precisa ser number
    AnoLançamento: PropTypes.number,
}

Item.defaultProps = {

    //caso a pessoa nao coloque nada ele era executar as seguintes ordens:
    marca: 'faltou a marca',
    AnoLançamento: 0,

}

export default Item 