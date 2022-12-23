import { Link } from 'react-router-dom'

import { DashboardContainer, ContainerCursos } from './styled'

const Dashboard = () => {

  return (
    <DashboardContainer>
      <h1>Cursos</h1>
      <p>Escolha um curso e inicie seus estudos </p>
      
      <div>
        <h2>HTML E CSS</h2>
        <ContainerCursos>
          <div>
            <h3>Curso de Html5 e Css3 - Modúlo 01</h3>
            <Link to={"/aula/html-css-01/1"}><img src='/images/html1.jpeg' alt='curso de html e css 01'/></Link>
          </div>
          <div>
            <h3>Curso de Html5 e Css3 - Modúlo 02</h3>
            <Link to={"/aula/html-css-02/1"}><img src='/images/html2.jpeg' alt='curso de html e css 02'/></Link>
          </div>
          <div>
            <h3>Curso de Html5 e Css3 - Modúlo 03</h3>
            <Link to={"/aula/html-css-03/1"}><img src='/images/html3.png' alt='curso de html e css 02'/></Link>
          </div>
          <div>
            <h3>Curso de Html5 e Css3 - Modúlo 04</h3>
            <Link to={"/aula/html-css-04/1"}><img src='/images/html4.png' alt='curso de html e css 02'/></Link>
          </div>
          <div>
            <h3>Curso de Html e css - Thiago Medeiros</h3>
            <Link to={"/aula/html-css-thiago-medeiros/1"}><img src='/images/html5.png' alt='curso de html e css 02'/></Link>
          </div>
          <div>
            <h3>Curso de Html5 e Css3 - HoraDeCodar</h3>
            <Link to={"/aula/html-css-hora-de-codar/1"}><img src='/images/html6.png' alt='curso de html e css 02'/></Link>
          </div>
        </ContainerCursos>
      </div>

      <div>
        <h2>JAVASCRIPT</h2>
        <ContainerCursos>
        <div>
            <h3>Curso de JavaScript e ECMAScript</h3>
            <Link to={"/aula/javascript-ecmascript/1"}><img src='/images/js2.png' alt='curso de html e css 01'/></Link>
          </div>
        <div>
            <h3>Curso de JavaScript</h3>
            <Link to={"/aula/javascriptdicas/1"}><img src='/images/js1.png' alt='curso de html e css 01'/></Link>
          </div>
        <div>
            <h3>Curso de JavaScript - Hora de Codar</h3>
            <Link to={"/aula/javascript-hora-de-codar/1"}><img src='/images/js3.png' alt='curso de html e css 01'/></Link>
          </div>
        </ContainerCursos>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard
