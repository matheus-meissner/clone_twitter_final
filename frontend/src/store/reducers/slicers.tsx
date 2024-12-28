import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Slicer = {
    msg: String[];
}

const Slicer: Slicer = {
    msg: []
}

export const Slice = createSlice({
    initialState: Slicer,
    name: 'slicers',
    reducers:{
        setSlicers: (state: any, actions:PayloadAction<string>)=>{
            state.msg.push(actions.payload);
        }
    }
});

export const { setSlicers} = Slice.actions

export default Slice.reducer