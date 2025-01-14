import { useState } from "react";
import { useNavigate } from "react-router";
import { ContainerPagLogin, Image, ContainerLogo, Logo, ContainerLogin, InputUserLogin, ButtonLogin, LabelLogin, LabelLoginText } from "./login_styled";
import fundo from "../assets/fundo.png";
import logo from "../assets/logo_tr.png";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        ///const response = await fetch("http://127.0.0.1:8000/api/login/", {
        const response = await fetch("https://fernando10092.pythonanywhere.com/api/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // Armazene o token e o nome de usuário no localStorage
            localStorage.setItem("token", data.access); // Token JWT
            localStorage.setItem("username", username); // Nome do usuário
            navigate("/feed");
        } else {
            alert("Credenciais inválidas.");
        }
    };

    return (
        <ContainerPagLogin>
            <div>
                <Image src={fundo} />
            </div>

            <ContainerLogin>
                <ContainerLogo>
                    <Logo src={logo} />
                </ContainerLogo>
                <LabelLoginText>Usuário</LabelLoginText>
                <InputUserLogin type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <LabelLoginText>Senha</LabelLoginText>
                <InputUserLogin type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                <LabelLogin onClick={() => navigate("/register")}>Cadastre-se aqui</LabelLogin>
            </ContainerLogin>
        </ContainerPagLogin>
    );
};

export default Login;
