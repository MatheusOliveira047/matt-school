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
  }
  p{
    margin: 2em 0;
    font-size: 1.6em;
  }
`

export const ContainerCursos = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  div{
    padding: 10px 50px;

  }
`