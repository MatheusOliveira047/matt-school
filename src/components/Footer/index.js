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
  h3{
    @media (max-width:600px){
        font-size: 1em;
      }
      @media (max-width:400px){
        font-size: 0.7em;
      }
  }
  p{
    @media (max-width:600px){
        font-size: 0.8em;
      }
      @media (max-width:400px){
        font-size: 0.6em;
      }
  }
`

export default Footer