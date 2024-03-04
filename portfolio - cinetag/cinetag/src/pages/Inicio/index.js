import React, { useEffect, useState } from "react";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
// import videos from "json/db.json"
import styles from "./inicio.module.css"

function Inicio(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Joaogsa/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, []) 

    return (
        <>
            
            <Banner imagem="home"></Banner> 
            <Titulo>
                <h1>Um lugar para guardar seus vídeos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) =>{
                    return <Card {...video} key={video.id}/>
                 })}
            </section>
        </>
        
    )
}
 
export default Inicio; 