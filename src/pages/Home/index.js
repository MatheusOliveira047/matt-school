import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.container_about}>
      <div className={styles.about}>
        <h1>Sobre o Matt <span>School</span></h1>
        <h3>Uma escola de programação online com diversos cursos</h3>
        <p>No Matt School você tera acesso a diversos cursos de programação gratuito, Front-end, Back-End, Dados e muito mais, clique no link abaixo para acessar a Dashboard e escolha com qual curso você quer começar.</p>
        <Link to={'/cursos'} className='btn'>Dashboard</Link>
      </div>
    </div>
  )
}

export default About
