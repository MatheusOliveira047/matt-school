import styled from 'styled-components';

export const DashboardContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1{
    font-size: 3em;
    margin: 50px 0 10px;
    @media (max-width:700px){
        font-size: 2.2em;
    }
    @media (max-width:400px){
        font-size: 1.8em;
    }
  }

  h2{
    @media (max-width:700px){
        font-size: 1.5em;
    }
    @media (max-width:400px){
        font-size: 1.2em;
    }
  }

  p{
    margin: 2em 0;
    font-size: 1.6em;
    @media (max-width:700px){
        font-size: 1.2em;
    }
    @media (max-width:400px){
        font-size: 1em;
    }
  }
`

export const ContainerCursos = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  div{
    padding: 10px 0;
    width: 30%;
    @media (max-width:1024px){
      width: 40%;
    }
    @media (max-width:700px){
      width: 90%;
    }
    @media (max-width:400px){
      width: 98%;
    }
    img{
      width: 80%;
    }
    h3{
    @media (max-width:700px){
        font-size: 1.1em;
    }
    @media (max-width:400px){
        font-size: 0.9em;
    }
    }

  }
`