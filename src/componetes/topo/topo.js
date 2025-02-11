import styled from "styled-components";

export const StyleTopo = styled.section`
    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .opcoes {
        z-index: 10;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(11, 11, 11, 0.5);
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 600px; /* Define uma largura máxima para evitar que o menu se estenda demais */
            list-style: none;
            padding: 0;
            margin: 0;
            flex-wrap: wrap;

            li {
                color: aliceblue;
                margin: 5px;
                text-align: center;

                a {
                    text-decoration: none;
                    color: inherit;

                    &:hover {
                        color: orange;
                    }
                }
            }
        }
    }

    .textoBanner {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
    
        text-align: center;
        padding: 10px;
        background-color: rgba(110, 110, 110, 0.5);
        color: aliceblue;

        h1 {
            font-size: 2rem;
            width: 98%;

        }

        h2 {
            color: #fdfb46;
            font-family: "Anton", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 4rem;
 
 
        }
    }

    @media (max-width: 768px) {
        .textoBanner {
            top: 15%;
            height: 75%;
            
        }
    }

    @media (max-width: 480px) {
        .opcoes ul {
            
         

            li {
             

                a {
                   
                    display: block;
                }
            }
        }
    }
`;