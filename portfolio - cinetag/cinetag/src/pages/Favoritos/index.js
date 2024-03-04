import React from "react";
import styles from  "./Favoritos.module.css"
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { UseFavoritoContext } from "contextos/Favoritos";
import Card from "components/Card";

function Favoritos(){
    const {favorito} = UseFavoritoContext()
    return(
        <>
        <Banner imagem={'favoritos'}></Banner>
        <Titulo>
            <h1>Meus Favotiros</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
            })}
        </section>
        </>
    )
}

export default Favoritos;