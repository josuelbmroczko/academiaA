import styled from "styled-components";
import imagem from '../../imagens/Taekwondo.png';

export const StyleLuta = styled.section`
 position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${imagem});
    background-size: cover;
     bottom: 50px;
    background-position: center;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    margin: 2rem auto;
    border-radius: 50px;

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin: 1.5rem auto;
    
    }

    @media (max-width: 480px) {
        padding: 1rem;
        margin: 1rem auto;     
    }

    .content {
        background: rgba(255, 255, 255, 0.9);
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        max-width: 100%;
        text-align: center;
        position: relative;

        &::before, &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 30px;
            background: white;
            border: 1px solid #ccc;
            border-bottom: none;
            border-right: none;
            transform: rotate(45deg);
        }

        &::before {
            top: -15px;
        }

        &::after {
            bottom: -15px;
        }
    }

    h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
          
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;

        }
    }

    p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1rem;
            
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    a {
        font-size: 1.2rem;
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }
`;
