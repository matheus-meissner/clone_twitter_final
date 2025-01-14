import {
    Ul,
    Li,
    BarraLateral,
    TextTitle,
    A,
} from "../feeds/feed_styled";
import { Link, useNavigate } from "react-router";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useSelector } from "react-redux";
import { RootState } from "../store";


const Barra = () => {

    const username = localStorage.getItem("username");

    const handleLogout = async () => {
        try {
            // Opcional: Notificar o backend sobre o logout (caso necessário)
            const token = localStorage.getItem("token");
            if (token) {
                //const response = await fetch("http://127.0.0.1:8000/api/logout/", {
                const response = await fetch("https://fernando10092.pythonanywhere.com/api/logout/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Envia o token ao backend
                    },
                });

                if (response.ok) {
                    console.log("Logout realizado com sucesso no backend.");
                } else {
                    console.warn("Erro ao realizar logout no backend.");
                }
            }

            // Limpa o token e outros dados de autenticação do cliente
            localStorage.removeItem("token");

            // Redireciona para a página de login
            const navigate = useNavigate();
            navigate("/");

        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    const corSelect = useSelector((state: RootState) => state.posts.corFundo)
    const fotoSelect = useSelector((state: RootState)=>state.posts.avatar)

    //RETURN
    return (
        <>
            <BarraLateral>
                <Container>
                    <Row>
                        <Col>
                            <Image style={{ width: '150px', height: '150px' }} src={fotoSelect} roundedCircle />
                        </Col>
                    </Row>
                </Container>
                <TextTitle>{username}</TextTitle>
                <Ul>
                    <Link to="/feed">
                        <Li color={corSelect}>
                            Feed
                        </Li>
                    </Link>

                    <Link to="/perfil">
                        <Li color={corSelect}>
                            Perfil
                        </Li>
                    </Link>

                    <Link to="/mensagem">
                        <Li color={corSelect}>
                            Mensagens
                        </Li>
                    </Link>

                    <A onClick={handleLogout}>
                        <Li color={corSelect}>
                            Sair
                        </Li>

                    </A>
                </Ul>
            </BarraLateral>
        </>
    )
}
export default Barra;