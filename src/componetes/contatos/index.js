import styled from "styled-components";

export const StyleContainer = styled.section`
    background-color: rgba(11, 11, 11, 0.9);
    padding: 2rem; /* Adicionei um espaçamento interno para melhorar a aparência */
    
    h2 {
        color: #FDFB46;
        font-family: "Anton", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 4rem;
        text-align: center; /* Centralizei o texto */
        margin-bottom: 2rem; /* Adicionei margem inferior */
    }
    
    @media (max-width: 768px) {
        /* Estilos para telas menores */
        h2 {
            font-size: 3rem; /* Reduzi o tamanho da fonte */
        }
    }
`;



export const StyledContatos = styled.section`
    display: flex;
    flex-direction: column; /* Alterei para coluna para melhorar a visualização em telas menores */
    align-items: center;
    padding: 2rem; /* Adicionei espaçamento interno */
    
    img {
        width: 50px;
    }
    
    ul {
        padding: 0;
        text-align: center; /* Centralizei o texto da lista */
    }
    
    li {
        list-style: none;
        color: aliceblue;
        font-size: 1.5rem;
        margin-bottom: 1rem; /* Adicionei espaçamento inferior entre os itens da lista */
    }
    
    a {
        color: antiquewhite;
        text-decoration: none; /* Removi a sublinhado padrão */
    }
    
    @media (min-width: 768px) {
        /* Estilos para telas maiores */
        flex-direction: row; /* Alterei de volta para linha para melhor visualização */
        justify-content: space-around;
        li {
            font-size: 1.8rem; /* Aumentei o tamanho da fonte dos itens da lista */
        }
    }
`;