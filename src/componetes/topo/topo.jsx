import React, { useEffect, useRef } from 'react';
import vidioTopo from '../../imagens/vidioTopo.mp4';
import { StyleTopo } from './topo';

export default function Topo() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Verifica se o vídeo está carregado e pronto para ser reproduzido
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play()
                .then(() => {
                    console.log('Vídeo reproduzindo automaticamente');
                })
                .catch(error => {
                    console.error('Erro ao reproduzir vídeo automaticamente:', error);
                });
        }
    }, []);

    return (
        <StyleTopo id='home'>
            <video ref={videoRef} autoPlay loop muted>
                <source src={vidioTopo} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            <div className='opcoes'>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#contatos">CONTATO</a></li> {/* Utilizando href para rolar suavemente até contatos */}
                    <li><a href="#unidades">UNIDADES</a></li>
                    <li><a href="#taekwondo">TAEKWONDO</a></li>
                </ul>
            </div>

            <div className='textoBanner'>
                <h1>ACADEMIA DESCOMPLICADA ZERO ANUIDADE</h1>
                <h2>"Prepare-se para mudar para melhor."</h2>
            </div>
        </StyleTopo>
    );
}
