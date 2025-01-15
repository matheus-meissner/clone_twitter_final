import {
    Ul,
    Li,
    BarraLateral,
    TextTitle,
    A,
} from "../feeds/feed_styled";
import { Link, useNavigate } from "react-router"; // Corrigido para "react-router-dom"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Barra = () => {
    const navigate = useNavigate(); // Mova o hook para fora da função
    const username = localStorage.getItem("username");

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const response = await fetch(
                    "https://fernando10092.pythonanywhere.com/api/logout/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // Envia o token ao backend
                        },
                    }
                );

                if (response.ok) {
                    console.log("Logout realizado com sucesso no backend.");
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    navigate("/"); // Redirecione após o logout
                } else {
                    console.warn("Erro ao realizar logout no backend.");
                }
            }
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    const corSelect = useSelector((state: RootState) => state.posts.corFundo);
    const fotoSelect = useSelector((state: RootState) => state.posts.avatar);

    return (
        <>
            <BarraLateral>
                <Container>
                    <Row>
                        <Col>
                            <Image
                                style={{ width: "150px", height: "150px" }}
                                src={fotoSelect}
                                roundedCircle
                            />
                        </Col>
                    </Row>
                </Container>
                <TextTitle>{username}</TextTitle>
                <Ul>
                    <Link to="/feed">
                        <Li color={corSelect}>Feed</Li>
                    </Link>

                    <Link to="/perfil">
                        <Li color={corSelect}>Perfil</Li>
                    </Link>

                    <Link to="/mensagem">
                        <Li color={corSelect}>Mensagens</Li>
                    </Link>

                    <A onClick={handleLogout}>
                        <Li color={corSelect}>Sair</Li>
                    </A>
                </Ul>
            </BarraLateral>
        </>
    );
};

export default Barra;
