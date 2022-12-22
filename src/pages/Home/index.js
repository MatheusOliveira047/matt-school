import { Link } from 'react-router-dom'

import { ContainerAbout,About } from './styled'

const Home = () => {
  return (
    <ContainerAbout>
      <About>
        <h1>Sobre o Matt <span>School</span></h1>
        <h3>Uma escola de programação online com diversos cursos</h3>
        <p>No Matt School você tera acesso a diversos cursos de programação gratuito, Front-end, Back-End, Dados e muito mais, clique no link abaixo para acessar a Dashboard e escolha com qual curso você quer começar.</p>
        <Link to={'/cursos'} className='btn'>Dashboard</Link>
      </About>
    </ContainerAbout>
  )
}

export default Home
