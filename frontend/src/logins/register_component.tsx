import { useState } from "react";
import { useNavigate } from "react-router";
import { PagRegister, ContainerLogin, InputUserLogin, ButtonLogin, H1 } from "./login_styled";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        ///const response = await fetch("http://127.0.0.1:8000/api/register/", {
        const response = await fetch("https://fernando10092.pythonanywhere.com/api/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, email }),
        });

        if (response.ok) {
            alert("Usuário registrado com sucesso!");
            navigate("/");
        } else {
            alert("Erro ao registrar usuário.");
        }
    };

    return (
        <PagRegister>
            <ContainerLogin>
                <H1>Cadastre-se</H1>
                <form onSubmit={handleRegister}>
                    <InputUserLogin
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputUserLogin
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputUserLogin
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <ButtonLogin type="submit">Registrar</ButtonLogin>
                    <ButtonLogin type="button" onClick={()=>{navigate("/")}}>Voltar</ButtonLogin>
                </form>
            </ContainerLogin>
        </PagRegister>
    );
};

export default Register;
