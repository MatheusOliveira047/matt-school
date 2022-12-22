import './NavBar.css'

import { Header } from './styled'

import { useAuthentication } from '../../hooks/useAuthetication'

import { useAuthValue } from '../../context/AuthContext'


import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  const {user} = useAuthValue()
  const {logout} = useAuthentication()

  return (
    <Header>
        <div className={"logo"}>
           <Link to='/' className={"brand"}>
             Matt <span>School</span>
          </Link> 
        </div>
        <nav>

        <ul>
          {!user ? (
            <>
              <li><NavLink to={'/login'} className={({isActive}) => (isActive ? "active" : '')}>Login</NavLink></li>

              <li><NavLink to={'/register'} className={({isActive}) => (isActive ? "active" : '')}>Cadastrar</NavLink></li>
            </>
          ): 
            ( <>
            
            <li><NavLink to={'/cursos'} className={({isActive}) => (isActive ? "active" : '')}>Cursos</NavLink></li>
            <li><p onClick={logout}>Sair</p></li>
            </>)
          }
        </ul>
        </nav>
    </Header>
  )
}

export default NavBar