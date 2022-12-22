import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #F6FCFF;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
}
ul , li{
  list-style: none;
}
input::placeholder,
textarea::placeholder{
  font-family: "Montserrat", sans-serif;
  color: #AAA;

}

input:focus,
textarea:focus{
  outline: none;
}

a,
nav button{
  background-color: transparent;
  border: none;
  color: #000;
  transition: .4s;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
}

a:hover,
nav button:hover{
  color: #bbb;
}

form{
  max-width: 40%;
  margin: 0 auto;
}

label{
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}
label span{
  margin-bottom: .3em;
  font-weight: bold;
  text-align: left;
}

input,
textarea{
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #CCC;
  padding: .8em 0;
  background-color: transparent;
}

.btn{
  background-color: #012d6b;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  font-size: 1em;
}

.btn.btn-dark{
  background-color: #000;
  border-radius: 0;
}

body::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: gray;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(57, 57, 57);   
  border-radius: 20px;       
}

.btn.btn-outline{
  background-color: transparent;
  border-radius: 0;
  color: #000;
  border: 1px solid black;
  padding: 7px 30px;
}

.btn:hover{
  background-color: #001C43;
  color: #fff;
}
.btn.btn-outline:hover{
  background-color: #000;
}

.btn.btn-danger:hover{
  background-color: #dc3545;
}
button[disabled]{
  background-color: #aaa;

}

@media (max-width: 800px){
  form{
    max-width: 70%;
  }
}
@media (max-width: 500px){
  form{
    max-width: 85%;
  }
}

`