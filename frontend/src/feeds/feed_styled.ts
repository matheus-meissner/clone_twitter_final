import styled from 'styled-components';

export const FeedPage = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
`

export const BarraLateral = styled.div`
Padding-top: 10px;
background-color: 	#1C1C1C;
width: 100%;
height: 100%;
text-align: center;
`
export const Ul = styled.ul`
width: 100%;
padding: 0;
`
type BarraButton = {
    color?: string;
}
export const Li = styled.li<BarraButton>`
list-style: none;
cursor: pointer;
font-size: 20px;
color: white;
background-color: ${(e)=>e.color};
margin-top: 10px;
&:hover{
    background-color: #ddd;
    }
`

export const TextTitle = styled.h1`
color: white;
text-align: center;
`

type Costume = {
    color?: string
}
export const ContainerFeed = styled.div<Costume>`
padding: 5px;
width: 100%;
min-height: 100vh;
text-align: center;
background-color: ${(e)=>e.color};
`

export const ExtFeed = styled.div`
display: grid;
grid-template-columns: auto auto;
background-color: #1C1C1C;
margin: 5px;
`

export const ContainerPost = styled.div`
border: 1px solid black;
width: 600px;
margin: 0 auto;
text-align: center;
`

export const TextArea = styled.textarea`
width: 100%;
height: 100px;
resize: none;
font-size: 28px;
text-align: center;
align-content: center;
border: solid;
`
export const ContainerButton = styled.div`
width: 100%;
text-align: right;
`
type BtnButton = {
    color?: string;
}
export const ButtonPost = styled.button<BtnButton>`
background-color: ${(e)=>e.color};
color: white;
width: 200px;
height: 40px;
border: none;
border-radius: 5px;
font-weight: bold;
&:hover {
    background-color: #a9dca7;
}
`

export const Table = styled.table`
margin-top: 30px;
color: black;
width: 100%;
`
export const Th = styled.th`

`
export const Tr = styled.tr`
border-bottom: 1px solid #ddd;
height: 80px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 15px;
&:hover{
    background-color: #ddd;
    }
`

export const Td = styled.td`
max-width: 200px; 
overflow: hidden; 
text-overflow: ellipsis; 
white-space: nowrap;
border: 1px solid #e0e0e0;
`

export const A = styled.a`
text-decoration: none;
`

export const Icon = styled.img`
width: 30px;
cursor: pointer;
`

//NOVOS MODELOS DE FEED -- NOME > POST > CURTIR > DATA > HORA
//CARD
//CONTAINER FEED
export const ContFeed2 = styled.div`
margin: 0 auto;
text-align: center;
width: 500px;
`

export const DivCard = styled.div`
display: inline;
border-bottom: 1px solid #ddd;
margin: 15px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&:hover{
    background-color: #ddd;
    }
`

//HEAD POST
export const HeadPost = styled.div`
display: flex;
justify-content: space-between;
background-color: #26303b;
width: 100%;
text-align: center;
`

//NOME
export const NomePost = styled.h1`
text-align: left;
font-size: 14px;
color: white;
`

export const ContainerMsg = styled.div`
height: 80px;
`

//MENSAGEM POST
export const MsgPost = styled.p`
font-size: 18px;
background-color: rgb(0,0,0,0.2);
height: 80px;
color: white;
align-content: center;
`

//DATAS E HORAS
export const TimePost = styled.h6`
text-align: right;
font-size: 10px;
display: inline;
color: white;
`
type ShowReeditPost = {
    display?: string
}
export const ContInteragirPost = styled.div<ShowReeditPost>`
display: ${(e)=>e.display};
background-color: #26303b;
`

export const InputUpdatePost = styled.input`
background-color: white;
border: none;
border-radius: 5px;
`

//CONTAINER INTERAGIR
export const ContInteragir = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #26303b;
`

//BTN INTERAGIR
type props = {
    cor?: string
}
export const BtnInteragir = styled.button<props>`
display: inline;
font-size: 16px;
color: ${(e)=>e.cor};
background-color: #26303b;
border: solid;
&:hover{
background-color: #7dafe3;
}
`
//COMENTARIO 
type Comment = {
    display: string
}

//NAO USADO
export const ExtrCommit = styled.div<Comment>`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: rgb(0,0,0,0.2);
display: ${(e)=>e.display};
font-size: 14px;
`

export const Comentado = styled.div<Comment>`

`
export const InputCommit = styled.input`
background-color: #caddf1;
border: none;
border-radius: 15px;
`

export const NewCommit = styled.label`
display: block;
`