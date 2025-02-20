import styled from "styled-components";
import { dados } from "../ajustes/ajustes";

export const StyledFooter = styled.footer`
     color: #fff;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const FooterSection = styled.div`
    width: 300px; /* Largura das colunas */
 `;

export const FooterTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const FooterContent = styled.div`
    font-size: 1.2rem;
`;

export const Container =styled.section`
 
    background-color: #333333ed;
 
 a{
    text-decoration: none;
    color: aliceblue;
 }
`

const Footer = () => {
    return (
        <Container>
        <StyledFooter>
            <FooterSection>
                <FooterTitle>Centro de atendimento</FooterTitle>
                <FooterContent>
                    <p>Whatsapp: <a href="tel:+11987654321"> (11) 99873-1174</a></p>
                     <p><a href={dados.redesSociais.insta}  target="blanck">Instagram: alphasport</a></p>
                 </FooterContent>
            </FooterSection>
            <FooterSection>
                <FooterTitle>Nossos Horários</FooterTitle>
                <FooterContent>
                    <p>Segunda a sexta das 6:00 às 22:00hs</p>
                    <p>Sábado das 9:00 às 12:00</p>
                </FooterContent>
            </FooterSection>
      
            
        </StyledFooter>
        <p>Copyright ©2023 Todos os direitos reservados</p>
        </Container>
    );
};

export default Footer;
