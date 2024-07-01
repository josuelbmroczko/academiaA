import styled from "styled-components";

export const StyledSection1 = styled.section`
 
  width: 100%;
  height: 70vh;
  text-align: center;
   h2 {
    font-size: 4rem;
    margin-bottom: 2rem;  
    color:#FDFB46;
  }

  p {
    width: 60%; /* Ajustei a largura do parágrafo para ser responsiva */
    margin: 0 auto; /* Centralizei o parágrafo na horizontal */
    font-size: 1.5rem;
    color: aliceblue;
    font-weight: bolder;
    background-color: rgba(1,1,1,0.3);
    border-radius: 30px 0 30px 0 ;
  }

  ul {
    display: flex;
    flex-wrap: wrap; /* Permitir que os itens da lista quebrem para a próxima linha */
    justify-content: center; /* Centralizei os itens horizontalmente */
    padding: 0;
    margin-top: 2rem; /* Adicionei margem superior para espaçamento */
  }

  li {
    list-style: none;
    font-size: 2rem;
    margin: 0.5rem; /* Espaçamento entre os itens da lista */
  }
  a{
    color: #FDFB46;
  }

  @media (max-width: 768px) {
    /* Media query para ajustar estilos para telas menores */
    p {
      width: 90%; /* Ajustei a largura do parágrafo para telas menores */
      font-size: 1.3rem; /* Reduzi o tamanho da fonte para telas menores */
    }
    h2{
      font-size: 3rem;
    }

    li {
      font-size: 1.8rem; /* Reduzi o tamanho da fonte dos itens da lista para telas menores */
    }
  }
`;
