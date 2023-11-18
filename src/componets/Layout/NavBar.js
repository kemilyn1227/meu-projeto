import {Link} from 'react-router-dom'

import styles from './NavBar.modules.css'

function NavBar(){
    return(
       
        <ul className={styles.List}>
            <li className={styles.item}><Link to='/'>home</Link></li> 
            <li className={styles.item}><Link to='/empresa'>empresa</Link></li>
            <li className={styles.item}><Link to='/contatoteste'>contato</Link></li>
        </ul>
        
    )
}

export default NavBar