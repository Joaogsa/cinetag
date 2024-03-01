import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import Cabecalholink from "components/CabecalhoLink";

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do CineTag"/>
            </Link>
            <nav>
                <Cabecalholink url='./'>Home</Cabecalholink>
                <Cabecalholink url='./Favoritos'>Favoritos</Cabecalholink>
            </nav>
        </header>
    )
}
export default Cabecalho;