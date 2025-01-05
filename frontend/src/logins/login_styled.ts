import styled from 'styled-components';

export const ContainerPagLogin = styled.div`
width: 100%;
height: 100vh;
background-color: #D3D3D3;
display: grid;
grid-template-columns: 3fr 2fr;
`

export const Image = styled.img`
width: 100%;
margin-top: 50px;
`

export const ContainerLogo = styled.div`
width: 100%;
text-align: center;
`

export const Logo = styled.img`
width: 100px;
`

export const ContainerLogin = styled.div`
background-color: rgb(0,0,0,0.8);
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
margin: 5px auto;
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
margin-top: 15px;
&:hover{
    color: black;
    }
`

export const PagRegister = styled.div`
margin: 0;
padding: 0;
background-color: #B0C4DE;
width: 100%;
height: 100vh;
align-content: center;
`

export const H1 = styled.h1`
color: white;
`