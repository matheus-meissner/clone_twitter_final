import { useState } from "react";
import { FeedPage, Ul, Li, BarraLateral, ContainerFeed, TextTitle, ContainerPost, TextArea, ContainerButton, ButtonPost, Table, Th, Tr, Td } from "./feed_styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSlicers } from "../store/reducers/slicers";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const Feed = () => {

    //NOME
    const nome = "Fernando";
    const data = new Date();

    //MENSAGEM
    const [msg, setMsg] = useState<string>();
    //INPUT
    const [inp, setInp] = useState<string>();

    const dispatch = useDispatch();
    const list_msg = useSelector((state: RootState) => state.posts.msg);

    const btnPost = () => {

        if(inp!=""){
            dispatch(setSlicers(inp!.toString()));
            setMsg(inp);
            setInp("");
            (document.getElementById('nameArea') as HTMLTextAreaElement)!.value = '';
        }else{
            alert("Digite algo para postar");
        }
       
    }

    return (
        <>

            <FeedPage>
                <BarraLateral>
                    <Container>
                        <Row>
                            <Col>
                                <Image style={{width:'150px', height:'150px'}} src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                    <TextTitle>Menu</TextTitle>
                    <Ul>
                        <Li>
                            Inicio
                        </Li>
                        <Li>
                            Perfil
                        </Li>
                        <Li>
                            Mensagens
                        </Li>
                        <Li>
                            Configuração
                        </Li>
                        <Li>
                            Sair
                        </Li>
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

                    <Card style={{ width: '48rem', margin: '0 auto' }}>
                        <TextArea placeholder="O que esta acontecendo..." maxLength={52} onChange={(event) => setInp(event.target.value)} id="nameArea" />
                        <Card.Body style={{ textAlign: 'right' }}>
                            <ButtonPost onClick={btnPost}>POSTAR</ButtonPost>
                        </Card.Body>
                    </Card>


                    <Table>

                        <Th>Nome</Th>
                        <Th>Mensagem</Th>
                        <Th>Data</Th>
                        <Th>Hora</Th>
                        <Th>Settings</Th>


                        {list_msg.map((item) => (
                            <Tr>
                                <Td>{nome}</Td>
                                <Td>{item}</Td>
                                <Td>{data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()}</Td>
                                <Td>{data.getHours() + ":" + data.getMinutes()}</Td>
                                <Td>{"config"}</Td>

                            </Tr>
                        ))}


                    </Table>

                </ContainerFeed>

            </FeedPage>

        </>
    )
}

export default Feed;