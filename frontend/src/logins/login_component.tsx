import { ContainerPagLogin, ContainerLogin, InputUserLogin, ButtonLogin, LabelLogin, LabelLoginText } from "./login_styled";
const Login = () => {
    return (
        <>
            <ContainerPagLogin>
                <div></div>
                <ContainerLogin>
                    <LabelLoginText>Usuário</LabelLoginText>
                    <InputUserLogin type="text" />
                    <LabelLoginText>Senha</LabelLoginText>
                    <InputUserLogin type="password" />
                    <ButtonLogin>Entrar</ButtonLogin>
                    <LabelLogin>Esqueceu a senha ?</LabelLogin>
                    <LabelLogin>Cadastre-se aqui</LabelLogin>
                </ContainerLogin>
            </ContainerPagLogin>
        </>
    )
}

export default Login;