import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import avatar from "../../assets/avatar.png";

type Slicer = {
    msg: String[];
    user: String;
    email: String;
    pass: String;
    corFundo: string;
    avatar: string;
};

const Slicer: Slicer = {
    msg: [],
    user: "",
    email: "",
    pass: ",",
    corFundo: "#B0A3AE",
    avatar: avatar
};

export const Slice = createSlice({
    initialState: Slicer,
    name: 'slicers',
    reducers: {
        setSlicers: (state: any, actions: PayloadAction<string>) => {
            state.msg.push(actions.payload);
        },
        userInfo: (state, actions) => {
            state.user = actions.payload;
        },
        setColor: (state, actions) => {
            state.corFundo = actions.payload;
        },
        setImg: (state, actions) =>{
            state.avatar = actions.payload;
        }
    },
});

export const { setSlicers, userInfo, setColor, setImg } = Slice.actions;

const persistConfig = {
    key: 'slicers',
    storage,
    whitelist: ['corFundo','avatar'],
};

export default persistReducer(persistConfig, Slice.reducer);
