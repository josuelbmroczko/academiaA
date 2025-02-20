import React, { useState } from 'react';
import './NossaEquipe.css';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube  } from 'react-icons/fa';
import yasmin from '../../imagens/yasmin.jpg' 
import lucas from '../../imagens/lucas.jpg'
import Luciana from '../../imagens/luciana.jpg'
import edson from '../../imagens/edson.jpg'
//import joseImg from "../Assets/grandeJose.webp";
 
 

const colaboradores = [
  { 
    id: '00', 
    nome: 'Edson', 
    sobrenome: 'Constantino', 
    img: edson, 
    cargo: 'Personal/Proprietário',
 
     
    insta: 'https://www.instagram.com/edson_constantino/',
   
  },
 
  { 
    id: '02', 
    nome: 'Yasmiin', 
    sobrenome: 'gasparotto', 
    img: yasmin, 
    cargo: 'Personal',
 
     
    insta: 'https://www.instagram.com/yaas.gasparotto?igsh=cjBrdHo5Z3lvNnhs',
  },
  { 
    id: '01', 
    nome: 'Luciana ', 
    sobrenome: 'Almeida', 
    img: Luciana, 
    cargo: 'professora de ritmos e ritbox',
 
     
    insta: 'https://www.instagram.com/luucy.almeida?igsh=cm96MDRibTdtNGtj',
  },
  { 
    id: '03', 
    nome: 'lucas', 
    sobrenome: 'silva', 
    img: lucas, 
    cargo: 'professor de Taekwondo',
 
     
    insta: 'https://www.instagram.com/oluca.ssilva/',
  },
 
 
 
  
];

const NossaEquipe = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (perfil) => {
    setModalData(perfil);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div id="secao4" className="nossa-equipe">
      <div className="perfis-de-colaboradores">
        {colaboradores.map((perfil) => (
          <div key={perfil.id} className="perfil" onClick={() => openModal(perfil)}>
            <img src={perfil.img} alt={`${perfil.nome} ${perfil.sobrenome}`} className="imagem-colaborador" />
            <h3>{perfil.nome} {perfil.sobrenome}</h3>
            <p>{perfil.cargo}</p>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-header">
              <img src={modalData.img} alt={`${modalData.nome} ${modalData.sobrenome}`} className="modal-img" />
              <div className="modal-info">
                <h2>{modalData.nome} {modalData.sobrenome}</h2>
                <p><strong>Cargo:</strong> {modalData.cargo}</p>
                <div className='modalIco'>
  {modalData.linkedin && (
    <a href={modalData.linkedin} target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
  )}
  {modalData.github && (
    <a href={modalData.github} target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} />
    </a>
  )}
  {modalData.insta && (
    <a href={modalData.insta} target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} />
    </a>
  )}
  {modalData.youtube && (
    <a href={modalData.youtube} target="_blank" rel="noopener noreferrer">
      <FaYoutube size={24} />
    </a>
  )}
</div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NossaEquipe;