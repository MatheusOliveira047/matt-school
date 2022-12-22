import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthetication'

import {ContainerLogin} from './styled'
import { Error } from '../../styles/Components'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const {loading, error:authError, login} = useAuthentication()

  const handleFormLogin = async (e)=>{
    e.preventDefault()
    
    setError("")

    const user = {
      email,
      password
    }

   const res = await login(user)
   console.log(res)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }

  },[authError])

  
  return (
    <ContainerLogin>
      <h1>Login</h1>
      <p>Ainda não possui conta ? Faça seu cadastro <Link to={"/register"}>Aqui</Link> </p>
      <form onSubmit={handleFormLogin}>
      
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
      
     {loading ? (<button className='btn' disabled> Aguarde...</button>) : (<button className='btn'> Login</button>)}
      {error && <Error>{error}</Error>}


      </form>
    </ContainerLogin>
  )
}

export default Login
