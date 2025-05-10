import React, { useEffect, useRef } from 'react';
import vidioTopo from '../../imagens/vidioTopo.mp4';
import { StyleTopo } from './topo';

export default function Topo() {
    const videoRef = useRef(null);

    useEffect(() => {
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

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    };

    return (
        <StyleTopo id='home'>
            <video ref={videoRef} autoPlay playsInline loop muted>
    <source src={vidioTopo} type="video/mp4" />
    Seu navegador não suporta o elemento de vídeo.
</video>


            <div className='opcoes'>
                <ul>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToElement('home'); }}>HOME</a></li>
                    <li><a href="#contatos" onClick={(e) => { e.preventDefault(); scrollToElement('contatos'); }}>CONTATO</a></li>
                    <li><a href="#unidades" onClick={(e) => { e.preventDefault(); scrollToElement('unidades'); }}>UNIDADES</a></li>
                    <li><a href="#taekwondo" onClick={(e) => { e.preventDefault(); scrollToElement('taekwondo'); }}>TAEKWONDO</a></li>
                </ul>
            </div>

            <div className='textoBanner'>
                <h1>ACADEMIA DESCOMPLICADA ZERO ANUIDADE</h1>
                <h2>"Desafie seu corpo todos os dias!."</h2>
            </div>
        </StyleTopo>
    );
}
