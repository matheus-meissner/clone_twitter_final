import { useEffect, useState } from "react";
import Barra from "../barra/barra_components";
import { ContainerMessage, ContMsg, H1, Input, Botao, Table, Tr, Td } from "./message_styed";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Message = () => {
    // Declarando variáveis
    const [info, setInfo] = useState<any[]>([]);
    const [termo, setTermo] = useState<string>(""); // Inicializa como string vazia
    const [filtrado, setFiltrado] = useState<any[]>([]);

    // Função de chamada para API
    const msgView = async () => {
        const response = await fetch("https://fernando10092.pythonanywhere.com/data/");
        const data = await response.json();
        setInfo(data);
        setFiltrado(data); // Inicializa o estado filtrado com todos os dados
    };

    // UseEffect para inicializar com a chamada para API
    useEffect(() => {
        msgView();
    }, []);

    // Função de pesquisa
    const pesquisar = () => {
        const filtro = info.filter((e) =>
            e.name.toLowerCase().includes(termo.toLowerCase())
        );
        setFiltrado(filtro);
    };

    //Cor de dunfo do Selector
    const corSelect = useSelector((state: RootState)=>state.posts.corFundo)

    // Return
    return (
        <>
            <ContainerMessage>
                <Barra />
                <ContMsg color={corSelect}>
                    <H1>FILTRAR MENSAGENS</H1>
                    <Input
                        value={termo}
                        onChange={(event) => setTermo(event.target.value)}
                        type="text"
                        placeholder="Pesquisar por nome..."
                    />
                    <Botao onClick={pesquisar}>Pesquisar</Botao>
                    <Table>
                        <thead>
                            <Tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>MENSAGEM</th>
                                <th>DATA</th>
                                <th>HORA</th>
                                <th>CURTIU</th>
                            </Tr>
                        </thead>
                        <tbody>
                            {filtrado.map((e, index) => (
                                <Tr key={index}>
                                    <Td>{e.id}</Td>
                                    <Td>{e.name}</Td>
                                    <Td>{e.msg}</Td>
                                    <Td>{e.dt}</Td>
                                    <Td>{e.hour}</Td>
                                    <Td>{e.curtiu}</Td>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </ContMsg>
            </ContainerMessage>
        </>
    );
};

export default Message;
