import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Slicer = {
    msg: String[];
    user: String;
    email: String;
    pass: String;
}

const Slicer: Slicer = {
    msg: [],
    user: "",
    email: "",
    pass: ","
}

export const Slice = createSlice({
    initialState: Slicer,
    name: 'slicers',
    reducers:{
        setSlicers: (state: any, actions:PayloadAction<string>)=>{
            state.msg.push(actions.payload);
        },
        userInfo: (state, actions)=>{
            state.user = actions.payload;
        }
    }
});

export const { setSlicers, userInfo} = Slice.actions

export default Slice.reducer