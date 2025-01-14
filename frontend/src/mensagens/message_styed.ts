import styled from "styled-components";

//Container Barra / Mensagem
export const ContainerMessage = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
`

//Container Mensagem
type CorFundo = {
    color?: string;
}
export const ContMsg = styled.div<CorFundo>`
text-align: center;
margin: 0 auto;
width: 100%;
height: 100vh;
background-color: ${(e)=>e.color}
`

//H1
export const H1 = styled.h1`
color: white;
`

//Input
export const Input = styled.input`
width: 250px;
`

//Botao
export const Botao = styled.button`
background-color: white;
color: black;
border: outset;
&:hover{
background-color: black;
color: white;
}
`

//Table
export const Table = styled.table`
text-align: center;
margin: 0 auto;
width: 70%;
`

//tr
export const Tr = styled.tr`
height: 40px;
border: ridge;
`

//td
export const Td = styled.td`
margin: 50px;
`