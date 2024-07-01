import { StyleContainer, StyledContatos } from ".";
import imagem1 from '../../imagens/instagram.png'
import imagem2 from '../../imagens/telephone.png'
import imagem3 from '../../imagens/whatsap.png'
export default function Contatos() {
    return (
    <StyleContainer>

        <StyledContatos id="contatos"> 
           <h2>Contatos</h2>    
        <ul>
              
              <li><a href="tel:+551199999999"><img src={imagem3} alt="telefone" /></a></li>
          </ul>
            <ul>
              
                <li><a href="tel:+551199999999"><img src={imagem2} alt="telefone" /></a></li>
            </ul>

            <ul>
                 
                <li><a href="https://www.instagram.com/alphasport20/" target="blanck"><img src={imagem1} alt="instagran" /></a></li>
            </ul>
        </StyledContatos>
         </StyleContainer>
    );
}
