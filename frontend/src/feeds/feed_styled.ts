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
export const Li = styled.li`
list-style: none;
cursor: pointer;
font-size: 20px;
color: white;
background-color: #4682B4;
margin-top: 10px;
&:hover{
    background-color: #ddd;
    }
`

export const TextTitle = styled.h1`
color: white;
text-align: center;
`

export const ContainerFeed = styled.div`
padding: 5px;
width: 100%;
min-height: 100vh;
text-align: center;
background-color: #B0E0E6;
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

export const ButtonPost = styled.button`
background-color: #4682B4;
color: white;
width: 200px;
height: 40px;
border: none;
border-radius: 5px;

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