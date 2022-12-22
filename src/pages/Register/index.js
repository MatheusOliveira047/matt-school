import { useState,useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthetication'

import { RegisterContainer } from './styled'
import { Error } from '../../styles/Components'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error,setError] = useState('')

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais")
      return
    }

    const res = await createUser(user)

    console.log(res)

  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }

  },[authError])


  return (
    <RegisterContainer>
      <h1>Cadastre-se para acessar a Aréa de Cursos</h1>
      <p>Já tem conta ? Faça login <Link to={"/login"}>Aqui</Link> </p>
      <form onSubmit={handleSubmit}>
      <label>
        <span>Nome: </span>
        <input 
          type="text" 
          name='displayName' 
          required 
          placeholder='Nome do usuário'
          value={displayName}
          onChange={(e)=> setDisplayName(e.target.value)} 
        />
      </label>
      <label>
        <span>email: </span>
        <input 
          type="email" 
          name='email' 
          required 
          placeholder='Email do usuário'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}  
        />
      </label>
      <label>
        <span>Senha: </span>
        <input 
          type="password" 
          name='password' 
          required 
          placeholder='insira sua senha' 
          value={password}
          onChange={(e)=> setPassword(e.target.value)} 
        />
      </label>
      <label>
        <span>Confirmação de senha: </span>
        <input 
          type="password" 
          name='confirmPassword' 
          required 
          placeholder='Confirme sua senha'
          value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}  
        />
      </label>
     {loading ? (<button className='btn' disabled> Aguarde...</button>) : (<button className='btn'> Cadastrar</button>)}
      {error && <Error>{error}</Error>}


      </form>
    </RegisterContainer>
  )
}

export default Register