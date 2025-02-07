import React, { useState } from 'react';
import './NossaEquipe.css';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube  } from 'react-icons/fa';

//import joseImg from "../Assets/grandeJose.webp";
 
 

const colaboradores = [
  { 
    id: '00', 
    nome: 'Edson', 
    sobrenome: 'Constantino', 
    img: 'https://scontent.fcgh24-1.fna.fbcdn.net/v/t39.30808-6/462644881_8923928067617803_4484026263558265007_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7Mtilf4OvfsQ7kNvgEsxNpa&_nc_zt=23&_nc_ht=scontent.fcgh24-1.fna&_nc_gid=AYaqXNTW3w1oq5ygL9tB7Gm&oh=00_AYDBTHadKZY8ap6mXwKhSTwBBcXOz2Eo4CCHslLl3Gzo7w&oe=67A93AE8', 
    cargo: 'Personal',
 
     
    insta: 'https://www.instagram.com/edson_constantino/',
   
  },
  { 
    id: '01', 
    nome: 'Lembrar nome', 
    sobrenome: '', 
    img: 'https://scontent.fcgh24-1.fna.fbcdn.net/v/t39.30808-6/462644881_8923928067617803_4484026263558265007_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7Mtilf4OvfsQ7kNvgEsxNpa&_nc_zt=23&_nc_ht=scontent.fcgh24-1.fna&_nc_gid=AYaqXNTW3w1oq5ygL9tB7Gm&oh=00_AYDBTHadKZY8ap6mXwKhSTwBBcXOz2Eo4CCHslLl3Gzo7w&oe=67A93AE8', 
    cargo: 'Personal',
 
     
    insta: 'https://www.instagram.com/edson_constantino/',
  },
  { 
    id: '02', 
    nome: 'Yasmiin', 
    sobrenome: '', 
    img: 'https://scontent.fcgh24-1.fna.fbcdn.net/v/t39.30808-6/462644881_8923928067617803_4484026263558265007_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7Mtilf4OvfsQ7kNvgEsxNpa&_nc_zt=23&_nc_ht=scontent.fcgh24-1.fna&_nc_gid=AYaqXNTW3w1oq5ygL9tB7Gm&oh=00_AYDBTHadKZY8ap6mXwKhSTwBBcXOz2Eo4CCHslLl3Gzo7w&oe=67A93AE8', 
    cargo: 'Personal',
 
     
    insta: 'https://www.instagram.com/edson_constantino/',
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