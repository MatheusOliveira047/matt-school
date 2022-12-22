import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #003b8e;
  padding: 20px;
  height: 5vh;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  div{
    a{
      color: #fff;
      font-weight: bold;
      font-size: 1.8em;
      @media (max-width:700px){
        font-size: 1.1em;
      }
      @media (max-width:400px){
        font-size: 1em;
      }
    }
  }
  ul{
  display: flex;
  li{
    list-style: none;
    height: 100%;
    a {
      text-decoration: none;
      font-size: 16px;
      transition: 0.3 ease-in-out;
      padding: 30px 20px;
      color: #fff;
      height: 100%;
      font-weight: bold;
      font-size: 1em;
      @media (max-width:400px){
        font-size: 0.9em;
        padding: 30px 10px;

      }
      :hover{
        background-color: #011229;
      }
    }
    p{
      color: #fff;
      font-weight: bold;
      font-size: 1em;
      padding: 0 10px;
      cursor: pointer;
    }
  }
  }
`
