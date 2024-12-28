import styled from 'styled-components';

export const ContainerPagLogin = styled.div`
width: 100%;
height: 100vh;
background-color: blue;
display: grid;
grid-template-columns: auto auto;
`
export const ContainerLogin = styled.div`
background-color: #2b5469;
width: 400px;
height: 400px;
margin: auto;
text-align: center;
align-content: center;
border-radius: 50px;
`

export const InputUserLogin = styled.input`
width: 300px;
height: 30px;
margin: 10px;
`

export const ButtonLogin = styled.button`
width: 150px;
height: 30px;
background-color: #5e9cd9;
cursor: pointer;
display: block;
margin: auto;
border: none;
color: #ffffff;

&:hover{
    background-color: #123456;
    }

`

export const LabelLoginText = styled.label`
display: block;
color: #ffffff;
`

export const LabelLogin = styled.label`
display: block;
cursor: pointer;
color: #ffffff;
&:hover{
    color: black;
    }
`