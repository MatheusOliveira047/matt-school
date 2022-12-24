# MATT SCHOOL

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/MatheusOliveira047/matt-school/blob/main/LICENSE)

## Sobre o projeto

Matt School é uma escola de programação gratuita o sistema foi feito com responsividade para ser acessado em diversas plataformas.

A aplicação foi feita em React.js.

Para ver a aplicação clique no link: <a href="https://matt-school.vercel.app/" target="_blank">Matt School</a>

### Layout mobile

<img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile1.jpeg"/> - <img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile2.jpeg"/> - <img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile3.jpeg"/> - <img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile4.jpeg"/> - <img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile5.jpeg"/> - <img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile6.jpeg"/> - <img height="400em"  src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/mobile7.jpeg"/> 


### Layout web

<img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/web1.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/web2.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/web3.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/web4.png"/> - <img width="400em" height="300em" src="https://github.com/MatheusOliveira047/matt-school/blob/main/assets/img/web5.png"/>


## Tecnologias utilizadas

### Back end

- Firebase

### Front end

- HTML
- Css
- Javascript
- React.js
- React-Router-Dom
- Styled-Components

### Implantação em produção

- Back end: Firebase
- Front end: Vercel

## Implantações de desenvolvimento

- `React.js` foi utilizado para criar a SPA (Single Page Application), dentro da aplicação existe um arquivo .js com todos os dados dos cursos que estão na aplicação, e passado pela url o nome do curso e o id da aula do curso, esses dados são enviados para uma pagína dinâmica que utilizando o `useParams` hook do React esses dados são capturados e utilizando o metódo `Filter` do `Javascript` e feito um filtro no arquivo `cursos.js` assim filtrando e retornando o curso passado pela url, ainda usando o `Filter` e usado o Id passado pela url para filtrar o curso retornado para ser gerado a aula, utilizando o metódo `map` do `Javascript` e gerado a barra de navegação do curso com todas as aulas.

- `React-Router-Dom` foi utilizado para criar o roteamento da aplicação foi utilizado a versão 6.4.5, dentro do router foi feito a verificação de usuário existente para ter acesso as rotas bloqueadas.

- `Styled-Components` foi utilizado para criar os estilos da aplicação e o design responsivo.

- `Firebase` foi utilizado para criação de novos usuários e login no sistema para ter acesso a aréa dos cursos.

## Autor

Matheus Oliveira

<https://www.linkedin.com/in/ludsonmatheus/>
