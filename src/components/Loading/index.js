import loading from './loading-36.gif'

import styled from 'styled-components'

const ContainerLoading = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const Loading = ()=>{
  return(
    <ContainerLoading>
      <img src={loading} alt="Carregando"  />
    </ContainerLoading>
  )
}

export default Loading