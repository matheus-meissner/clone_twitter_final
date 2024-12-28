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
    Td 
} from "./feed_styled";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const Teste = () => {
    // Nome do usuário
    const nome = "Fernando";

    // Mensagens e estado dos inputs
    const [msg, setMsg] = useState<string>("");
    const [inp, setInp] = useState<string>("");
    const [list_msg, setListMsg] = useState<any[]>([]);

    // Backend API base URL
    const API_URL = "http://127.0.0.1:8000/api/data/";

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
                name: nome,
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
        } else {
            alert("Digite algo para postar");
        }
    };
    
    

    return (
        <>
            <FeedPage>
                <BarraLateral>
                    <Container>
                        <Row>
                            <Col>
                                <Image
                                    style={{ width: "150px", height: "150px" }}
                                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                                    roundedCircle
                                />
                            </Col>
                        </Row>
                    </Container>
                    <TextTitle>Menu</TextTitle>
                    <Ul>
                        <Li>Inicio</Li>
                        <Li>Perfil</Li>
                        <Li>Mensagens</Li>
                        <Li>Configuração</Li>
                        <Li>Sair</Li>
                    </Ul>
                </BarraLateral>

                <ContainerFeed>
                    <TextTitle>Feed</TextTitle>

                    <Card style={{ width: "48rem", margin: "0 auto" }}>
                        <TextArea
                            placeholder="O que está acontecendo..."
                            maxLength={52}
                            value={inp}
                            onChange={(event) => setInp(event.target.value)}
                            id="nameArea"
                        />
                        <Card.Body style={{ textAlign: "right" }}>
                            <ButtonPost onClick={btnPost}>POSTAR</ButtonPost>
                        </Card.Body>
                    </Card>

                    <Table>
                        <thead>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Mensagem</Th>
                                <Th>Data</Th>
                                <Th>Hora</Th>
                                <Th>Configurações</Th>
                            </Tr>
                        </thead>
                        <tbody>
                            {list_msg.map((item) => (
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.msg}</Td>
                                    <Td>{item.date}</Td>
                                    <Td>{item.hour}</Td>
                                    <Td>{"Configuração"}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </ContainerFeed>
            </FeedPage>
        </>
    );
};

export default Teste;
