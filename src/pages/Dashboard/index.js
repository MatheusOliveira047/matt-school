import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'


const Dashboard = () => {

  return (
    <div className={styles.dashboard}>
      <h1>Cursos</h1>
      <p>Escolha um curso e inicie seus estudos </p>
      
      <div>
        <h2>HTML E CSS</h2>
        <div className={styles.container_cursos}>
          <div>
            <h3>Curso de Html5 e Css3 - Modúlo 01</h3>
            <Link to={"/aula/html-css-01/1"}><img src='/images/html1.jpeg' alt='curso de html e css 01'/></Link>
          </div>
          <div>
            <h3>Curso de Html5 e Css3 - Modúlo 02</h3>
            <Link to={"/aula/html-css-02/1"}><img src='/images/html2.jpeg' alt='curso de html e css 02'/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard