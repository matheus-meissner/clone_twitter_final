import { useState, useEffect } from "react";
import {
    FeedPage,
    Ul,
    Li,
    BarraLateral,
    ContainerFeed,
    TextTitle,
    TextArea,
    ButtonPost,
    Table,
    Th,
    Tr,
    Td,
    A,
    Icon
} from "./feed_styled";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import icon from "../assets/icon.png"

const Feed = () => {
    // Nome do usuário
    //const nome = "Fernando";
    const nome = useSelector((state:RootState)=>state.posts.user);
    const username = localStorage.getItem("username");

    // Mensagens e estado dos inputs
    const [msg, setMsg] = useState<string>("");
    const [inp, setInp] = useState<string>("");
    const [list_msg, setListMsg] = useState<any[]>([]);

    // Backend API base URL
    const API_URL = "http://127.0.0.1:8000/data/";

    // Carregar mensagens do backend na inicialização
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setListMsg(response.data);
            })
            .catch((error) => {
                console.error("Erro ao carregar dados:", error);
            });
    }, []);

    // Função para postar mensagem
    const btnPost = () => {
        if (inp !== "") {
            const data = new Date();
            const postData = {
                name: username,
                msg: inp,
                dt: `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`, // Incluindo o campo 'dt'
                hour: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
            };

            axios.post(API_URL, postData)
                .then((response) => {
                    console.log("Dados enviados com sucesso:", response.data);
                    setInp(""); // Limpa o input
                    (document.getElementById('nameArea') as HTMLTextAreaElement)!.value = '';
                })
                .catch((error) => {
                    console.error("Erro ao enviar dados:", error);
                    alert("Erro ao conectar ao servidor. Verifique os detalhes.");
                });
            window.location.reload();
        } else {
            alert("Digite algo para postar");
        }
    };


    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Opcional: Notificar o backend sobre o logout (caso necessário)
            const token = localStorage.getItem("token");
            if (token) {
                const response = await fetch("http://127.0.0.1:8000/api/logout/", {
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
            navigate("/");

        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };



    return (
        <>

            <FeedPage>
                <BarraLateral>
                    <Container>
                        <Row>
                            <Col>
                                <Image style={{ width: '150px', height: '150px' }} src={avatar} roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                    <TextTitle>{username}</TextTitle>
                    <Ul>
                        <A href="/perfil">
                            <Li>
                                Inicio
                            </Li>
                        </A>

                        <Li>
                            Perfil
                        </Li>
                        <Li>
                            Mensagens
                        </Li>
                        <Li>
                            Configuração
                        </Li>
                        <A onClick={handleLogout}>
                            <Li>
                                Sair
                            </Li>

                        </A>
                    </Ul>
                </BarraLateral>

                <ContainerFeed>
                    <TextTitle>Feed</TextTitle>
                    {/*                     <ContainerPost>
                        <TextArea placeholder="O que esta acontecendo..." maxLength={200} onChange={(event) => setInp(event.target.value)} id="nameArea" />
                        <ContainerButton>
                            <ButtonPost onClick={btnPost}>POSTAR</ButtonPost>
                        </ContainerButton>
                    </ContainerPost> */}

                    <Card style={{ width: '48rem', margin: '0 auto', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: '#1C1C1C' }}>
                        <TextArea placeholder="Escreva aqui.." maxLength={52} onChange={(event) => setInp(event.target.value)} id="nameArea" />
                        <Card.Body style={{ textAlign: 'right' }}>
                            <ButtonPost onClick={btnPost}>POSTAR</ButtonPost>
                        </Card.Body>
                    </Card>
                    <Table>
                        <Th>Nome</Th>
                        <Th>Mensagem</Th>
                        <Th>Data</Th>
                        <Th>Hora</Th>
                        <Th>Editar</Th>
                        <tbody>
                            {list_msg.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.msg}</Td>
                                    <Td>{item.dt}</Td>
                                    <Td>{item.hour}</Td>
                                    <Td><Icon src={icon}/></Td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>

                </ContainerFeed>

            </FeedPage>

        </>
    )
}

export default Feed;