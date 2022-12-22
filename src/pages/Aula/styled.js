import styled from 'styled-components';

export const ContainerAulas = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const NavBarAulas = styled.nav`
  width: 20%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #012d6b;
  ::-webkit-scrollbar {
  width: 8px;               
  }

  ::-webkit-scrollbar-track {
    background: gray;        
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(61, 61, 61);   
    border-radius: 20px;       
  }
  ul{
    width: 100%;
    li{
      font-size: 14px;
      line-height: 18px;
      display: flex;
      a{
        color: #fff;
        padding: 20px 10px;
        width: 100%;
        :hover{background-color: #011e48;}
      }
    }
  }

`

export const Boxvideo = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin: 20px;
  }
  iframe{
    width: 80%;
    height: 70%;
  }

`
