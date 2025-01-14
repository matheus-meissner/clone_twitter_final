import { ContainerProfile, ContProfile } from "../barra/barra_styled";
import Barra from "../barra/barra_components";
import Image from 'react-bootstrap/Image';
import avatar from "../assets/avatar.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import pinguim from "../assets/pinguin.png";
import woman2 from "../assets/woman2.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setImg } from "../store/reducers/slicers";
const Profile = () => {

    //Obtendo dados do LocalStorage
    const username = localStorage.getItem("username");

    //Const foto
    const [foto, setFoto] = useState<string>(avatar);
    const dispatch = useDispatch()
    const selectorImg = useSelector((state: RootState)=>state.posts.avatar)

    //Funcao altera foto
    const rmFoto = () => {
        dispatch(setImg(avatar))
        setFoto(avatar)
    }
    const mFoto = () => {
        dispatch(setImg(man))
        setFoto(man)
    }
    const wFoto = () => {
        dispatch(setImg(woman))
        setFoto(woman)
    }
    const pFoto = () => {
        dispatch(setImg(pinguim))
        setFoto(pinguim)
    }
    const w2Foto = () => {
        dispatch(setImg(woman2))
        setFoto(woman2)
    }
    const m2Foto = () => {
        dispatch(setImg(man2))
        setFoto(man2)
    }
    const m3Foto = () => {
        dispatch(setImg(man3))
        setFoto(man3)
    }
    //RETURN
    return (
        <>
            <ContainerProfile>
                <Barra />
                <ContProfile>
                    <Image style={{ width: '150px', height: '150px', cursor: "pointer" }} src={selectorImg} roundedCircle />
                    <h1>Username: {username}</h1>
                    <h1>Escolha sua foto</h1>
                    <Image onClick={rmFoto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={avatar} roundedCircle />
                    <Image onClick={mFoto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={man} roundedCircle />
                    <Image onClick={wFoto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={woman} roundedCircle />
                    <Image onClick={m2Foto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={man2} roundedCircle />
                    <Image onClick={m3Foto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={man3} roundedCircle />
                    <Image onClick={pFoto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={pinguim} roundedCircle />
                    <Image onClick={w2Foto} style={{ width: '150px', height: '150px', cursor: "pointer" }} src={woman2} roundedCircle />

                </ContProfile>
            </ContainerProfile>
        </>
    )
}

export default Profile;