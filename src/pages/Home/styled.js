import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const About = styled.div`
  text-align: center;
  margin-top: 50px;
  width: 80%;
  h1,h3,p{
    margin-bottom: 30px;
  }
  h1{
    font-size: 2.4em;
    @media (max-width:700px){
        font-size: 1.8em;
      }
      @media (max-width:400px){
        font-size: 1.4em;
      }
  }
  h3{
    font-size: 1.8em;
    @media (max-width:700px){
        font-size: 1.4em;
      }
    @media (max-width:400px){
        font-size: 1em;
      }
  }
  p{
    text-align: left;
    font-size: 1.5em;
    @media (max-width:700px){
        font-size: 1.1em;
      }
      @media (max-width:400px){
        font-size: 0.8em;
      }
  }
  a{
  padding: 15px 30px;
  }
`