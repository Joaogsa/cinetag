import { Link } from 'react-router-dom';
import styles from './Cabecalholink.module.css'

function Cabecalholink({url, children}){
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link> 
    )
}

export default Cabecalholink;