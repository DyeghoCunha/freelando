import styled from '@emotion/styled'





const CabecalhoEstilizado = styled.header`
  background-color: ${props => props.theme.cores.primarias.a};
  padding: ${props => props.theme.espacamentos.m};
`

export const Cabecalho = ({children})=>{
  return(
    <CabecalhoEstilizado>
      {children}
    </CabecalhoEstilizado>

  )
}