import { useState, useEffect } from 'react'

import { useParams, NavLink} from 'react-router-dom'

import {ContainerAulas,NavBarAulas,Boxvideo,Menu} from './styled'

import { cursos } from '../../Cursos/cursos'

const Aula = ()=>{

  //state do curso
  const [navBarCurso,setNavBarCurso] = useState([])

  // state da aula
  const [aula,setAula] = useState([])

  // state do title do curso
  const [title,setTitle] = useState('')

  const [menuRes,setMenuRes] = useState(false)


  const {cursoParams,id} = useParams()

  const handleMenuRes = ()=>{
    setMenuRes(!menuRes)
  }



  useEffect(()=>{

    // metodo para filtrar o curso escolhido
    const Curso = cursos.filter(c => c.curso === cursoParams)
    
    // metodo para pegar o title do curso
    const title = Curso.map(c=> c.title)
    setTitle(title)
    
    //metodo para capturar as aulas do curso
    const Aulas = Curso.map(aulas => aulas.aulas)
    setNavBarCurso(Aulas)
    
    // metodo para capturar a aula escolhida
    const idNumber = Number(id)
    const aula = Aulas.map(aul => aul.filter(a=> a.id === idNumber))
    setAula(aula)
   
  },[cursoParams,id])


  
  return(
    <ContainerAulas>

      <NavBarAulas isMenu={menuRes}>
        
        { navBarCurso.map(aulas=> aulas.map(aul=>(
          <ul key={aul.id}>
            <li><NavLink onClick={handleMenuRes} to={`/aula/${cursoParams}/${aul.id}`} ><span>{aul.title}</span></NavLink></li>
          </ul>
          )))}

      </NavBarAulas>

      <Boxvideo>
        <Menu onClick={handleMenuRes}>
          <div></div>
          <div></div>
          <div></div>
        </Menu>
        
        <h1>{title}</h1>

        { aula.map(a => a.map(at=>(
          <>
            <h2>{at.title}</h2>
            <iframe src={at.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </>)))}

      </Boxvideo>

    </ContainerAulas>
  )
}

export default Aula