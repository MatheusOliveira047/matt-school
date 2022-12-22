import styled from 'styled-components';


const Footer = () => {
  return (
   <FooterComponent>
     <h3>Escreve sobre o mundo Tech </h3>
      <p>Copyright © Matheus Oliveira Todos os direitos reservados.</p> 
   </FooterComponent>
  )
}

const FooterComponent = styled.footer`
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #003b8e;
  color: #fff;
`

export default Footer