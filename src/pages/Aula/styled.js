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
  transition: 500ms ease-in-out;
  @media(max-width: 1124px){
    width: ${props => (props.isMenu ? '40%' : 0)}
  }
  @media(max-width: 700px){
    width: ${props => (props.isMenu ? '50%' : 0)}
    
  }

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
      font-size: 0.9em;
      line-height: 18px;
      display: flex;
      @media(max-width: 700px){
        font-size: 0.6em;

      }
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
  position: relative;
  transition: 500ms ease-in-out;
  @media(max-width: 1124px){
    width: ${props => (props.isMenu ? '60%' : '100%')}
  }
  @media(max-width: 700px){
    width: ${props => (props.isMenu ? '50%' : "100%")}
  }
  h1{
    @media(max-width: 1000px){
      font-size: 1.6em;
    }
    @media(max-width: 700px){
      font-size: 1.1em;

    }
  }
  h2{
    margin: 20px;
    @media(max-width: 1000px){
      font-size: 1.4em;
    }
    @media(max-width: 700px){
      font-size: 0.9em;
    }
  }
  iframe{
    width: 900px;
    height: 510px;
    @media(max-width: 1124px){
     width: 90%;
      height: 400px;
    }
    @media(max-width: 700px){
      width: 90%;
      height: 300px;
    }
    @media(max-width: 500px){
      width: 90%;
      height: 220px;
    }
  }

`
export const Menu = styled.div`
position: absolute;
top: 10px;
left: 10px;
display: none;
@media(max-width: 1124px){
  display: block;
}

  div{
        width: 40px;
        height: 3px;
        background-color: #000;
        margin-bottom: 4px;
        transition: 600ms;
        cursor: pointer;
    }
`