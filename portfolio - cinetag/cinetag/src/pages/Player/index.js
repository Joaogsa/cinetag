import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';

import Container from 'components/Container';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player(){
    const parametros = useParams();

    const [video, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Joaogsa/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(...dados)
            })
    }, []) 

    if (!video) {
        return <NaoEncontrada />
    }

    return(
        <>
        <Banner imagem="player"></Banner>
        <Container>
        <Titulo><h1>Player</h1></Titulo>
        <iframe
        width="100%"
        height="100%"
        className={styles.iframe}
        src={video.link} 
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
        
        </>
    )
}

export default Player;