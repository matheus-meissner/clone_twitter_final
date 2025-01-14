import { useState, useEffect } from "react";
import {
    FeedPage,
    ContainerFeed,
    TextTitle,
    TextArea,
    ButtonPost,
    Icon,
    DivCard,
    NomePost,
    TimePost,
    HeadPost,
    ContInteragir,
    BtnInteragir,
    MsgPost,
    ContFeed2,
    InputCommit,
    NewCommit,
    ExtrCommit,
    ExtFeed,
    ContainerMsg,
    ContInteragirPost,
    InputUpdatePost
} from "./feed_styled";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import lixo from "../assets/lixo.png";
import lapis from "../assets/icon.png";
import coment from "../assets/commit.png";
import neutro from "../assets/tema_neutro.png";
import blue from "../assets/tema_blue.png";
import pink from "../assets/tema_pink.png";
import { setColor } from "../store/reducers/slicers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Barra from "../barra/barra_components";

const Feed = () => {
    // Nome do usuário armazenado no LocalStorage
    const username = localStorage.getItem("username");

    // Mensagens e estado dos inputs
    const [inp, setInp] = useState<string>("");
    const [list_msg, setListMsg] = useState<any[]>([]);

    // Backend API base URL
    //const API_URL = "http://127.0.0.1:8000/data/";
    const API_URL = "https://fernando10092.pythonanywhere.com/data/";

    // Carregar mensagens do backend na inicialização
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                const updatedData = response.data.map((item: any) => ({
                    ...item,
                    typing: "", // Adiciona o campo typing para cada item
                }));
                setListMsg(updatedData);
            })
            .catch((error) => {
                console.error("Erro ao carregar dados:", error);
            });
    }, []);

    // Função para postar mensagem
    const btnPost = () => {
        if (inp !== "") {
            const data = new Date();
            const curtiu = "curtir";
            const commit1 = "-";
            const commit2 = "-";
            const commit3 = "-";
            const postData = {
                name: username,
                msg: inp,
                dt: `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`, // Incluindo o campo 'dt'
                hour: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
                curtiu: curtiu,
                commit1: commit1,
                commit2: commit2,
                commit3: commit3
            };

            //Chamada via API - axios
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

    //Aparecer comentário
    const [reveal, setReveal] = useState<string>("none")
    const aparecerCommit = () => {
        if (reveal == "none") {
            setReveal("true");
        } else {
            setReveal("none");
        }
    }

    //Cor de Fundo - Tema
    const dispatch = useDispatch();
    const corSelect = useSelector((state: RootState) => state.posts.corFundo)

    const corNeutro = () => {
        dispatch(setColor("#B0A3AE"))
    }

    const corBlue = () => {
        dispatch(setColor("#5C77B5"))
    }

    const corPink = () => {
        dispatch(setColor("#E543D2"))
    }

    //Mostar comentários
    const [showedit, setShowedit] = useState<string>("none")
    const editPost = () => {
        if (showedit == "none") {
            setShowedit("true")
        } else {
            setShowedit("none")
        }
    }

    //Estado do input editar
    const [inpEdit, setInpedit] = useState<string>();

    //RETURN
    return (
        <>
            <FeedPage>
                <Barra />
                <ContainerFeed color={corSelect}>
                    <ExtFeed>
                        <div>
                            <TextTitle>Feed</TextTitle>
                        </div>
                        <div>
                            <Icon onClick={corNeutro} src={neutro}></Icon>
                            <Icon onClick={corBlue} src={blue}></Icon>
                            <Icon onClick={corPink} src={pink}></Icon>
                        </div>
                    </ExtFeed>
                    <Card style={{ width: '48rem', margin: '0 auto', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: '#1C1C1C' }}>
                        <TextArea placeholder="Escreva aqui.." maxLength={52} onChange={(event) => setInp(event.target.value)} id="nameArea" />
                        <Card.Body style={{ textAlign: 'right' }}>
                            <ButtonPost color={corSelect} onClick={btnPost}>POSTAR</ButtonPost>
                        </Card.Body>
                    </Card>
                    <ContFeed2>
                        {list_msg.map((item, index) => (

                            <DivCard key={index}>
                                <HeadPost>
                                    <NomePost>{item.name}</NomePost>
                                    <div>
                                        <TimePost>{item.dt + " / "}</TimePost>
                                        <TimePost>{item.hour}</TimePost>
                                    </div>
                                    <div>
                                        <Icon onClick={editPost} src={lapis} />
                                        <Icon onClick={() => {
                                            //EXCLUIR POST
                                            const id = item.id;
                                            try {
                                                fetch("https://fernando10092.pythonanywhere.com/data/delete", {
                                                    method: 'DELETE',
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ id: id })
                                                });
                                                window.location.reload()
                                                return alert("Dados Excluidos com sucesso");
                                            } catch (error) {
                                                alert("Erro ao excluir postagem" + error)
                                            }
                                        }} src={lixo} />
                                    </div>
                                </HeadPost>
                                <ContainerMsg>
                                    <ContInteragirPost display={showedit}>
                                        <InputUpdatePost onChange={(event) => { setInpedit(event.target.value) }} value={item.inpEdit} placeholder="Edite seu post..." />
                                        <Icon onClick={
                                            async () => {
                                                const dados = {
                                                    id: item.id,
                                                    msg: inpEdit
                                                }
                                                try {
                                                    const response = await fetch("https://fernando10092.pythonanywhere.com/data/update/post", {
                                                        method: 'PUT',
                                                        headers: { "Content-Type": "application/json" },
                                                        body: JSON.stringify(dados)
                                                    })
                                                    if (response.ok) {
                                                        console.log("Dados Alterados")
                                                        window.location.reload()
                                                    }
                                                } catch (error) {
                                                    alert("Erro ao editar")
                                                }
                                            }
                                        } src={coment} />
                                    </ContInteragirPost>
                                    <MsgPost>{item.msg}</MsgPost>
                                </ContainerMsg>
                                <ContInteragir>
                                    <BtnInteragir onClick={
                                        async () => {
                                            if (item.curtiu == "curtir") {
                                                const dados = {
                                                    id: item.id,
                                                    curtiu: 'gostei'
                                                }
                                                try {
                                                    const response = await fetch("https://fernando10092.pythonanywhere.com/data/update", {
                                                        method: 'PUT',
                                                        headers: { "Content-Type": "application/json" },
                                                        body: JSON.stringify(dados)
                                                    })

                                                    if (response.ok) {
                                                        window.location.reload();
                                                    }

                                                } catch (erro) {
                                                    alert("Erro ao atualizar" + erro)
                                                    console.log(erro)
                                                }
                                            } else {

                                                const dados = {
                                                    id: item.id,
                                                    curtiu: 'curtir'
                                                }
                                                try {
                                                    const response = await fetch("https://fernando10092.pythonanywhere.com/data/update", {
                                                        method: 'PUT',
                                                        headers: { "Content-Type": "application/json" },
                                                        body: JSON.stringify(dados)
                                                    })

                                                    if (response.ok) {
                                                        window.location.reload();
                                                    }

                                                } catch (erro) {
                                                    alert("Erro ao atualizar" + erro)
                                                    console.log(erro)
                                                }

                                            }


                                        }
                                    } cor="white">{item.curtiu}</BtnInteragir>
                                    <BtnInteragir onClick={aparecerCommit} cor="white">{"comentar"}</BtnInteragir>

                                </ContInteragir>

                                <ExtrCommit display={reveal}>

                                    <div>
                                        <InputCommit
                                            value={item.typing}
                                            onChange={(event) => {
                                                setListMsg((prevList) =>
                                                    prevList.map((msg) =>
                                                        msg.id === item.id
                                                            ? { ...msg, typing: event.target.value }
                                                            : msg
                                                    )
                                                );
                                            }}
                                            name="InpCom"
                                        />

                                        <Icon src={coment} onClick={async () => {
                                            const dados = {
                                                id: item.id,
                                                commit1: item.typing
                                            }
                                            try {
                                                const response = await fetch("https://fernando10092.pythonanywhere.com/data/update/c1", {
                                                    method: 'PUT',
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify(dados)
                                                })

                                                if (response.ok) {
                                                    console.log("Comentário inserido");
                                                    setListMsg((prevList) =>
                                                        prevList.map((
                                                            msg) =>
                                                            msg.id === item.id
                                                                ? { ...msg, commit1: item.typing, typing: "" }
                                                                : msg
                                                        )
                                                    );
                                                } else {
                                                    console.log("Erro ao inserir o comentário");
                                                }

                                            } catch (error) {
                                                alert("Erro ao inserir o comentário: " + error)
                                            }
                                        }} />
                                    </div>
                                    <div>
                                        <NewCommit>{"Último comentário: " + item.commit1}</NewCommit>
                                    </div>
                                </ExtrCommit>

                                <p>_________________________________________________________</p>

                            </DivCard>
                        ))}
                    </ContFeed2>
                </ContainerFeed>
            </FeedPage>
        </>
    )
}

export default Feed;
