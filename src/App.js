import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';
import { onAuthStateChanged} from 'firebase/auth';

import { useState,useEffect } from 'react';

import { useAuthentication } from './hooks/useAuthetication';

//context
import {AuthProvider} from './context/AuthContext'

//Pages
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import Aula from './pages/Aula';


//Componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loading from './components/Loading';

// CSS
import styled from 'styled-components';

const Container = styled.div`
    min-height: 85vh;
`

function App() {

  const [user,setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{

    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })

  },[auth])

  if(loadingUser){
    return <Loading/>
  }


  return (
    <AuthProvider value={{user}}>
      <BrowserRouter>
        <NavBar/>
        <Container>
          <Routes>
             {/* ROTAS ABERTAS */}
            <Route path='/' element={<Home/>} />
                {/* ROTAS PROTEGIDAS */}
            <Route path='/login' element={!user ? <Login/> : <Navigate to={'/'}/>} />
            <Route path='/register' element={!user ? <Register/> : <Navigate to={'/'}/>} />
            <Route path='/cursos' element={user ? <Dashboard/> : <Login/>} />
            <Route path='/aula/:cursoParams/:id' element={user ? <Aula/> : <Login/>} />
          </Routes>
        </Container>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
