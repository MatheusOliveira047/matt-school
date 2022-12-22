import styled from 'styled-components';

export const RegisterContainer = styled.div`
  text-align: center;
  padding-top: 100px;
  p{
    margin-bottom: 30px;
    @media (max-width: 700px){
    font-size: 0.9em;
    margin-right: 10px;
    margin-left: 10px;
    }
  }
  h1{
    @media (max-width: 700px){
    font-size: 1.2em;
    margin-right: 10px;
    margin-left: 10px;
    }
    @media (max-width: 450px){
    font-size: 1em;
    
    }
  }
`

