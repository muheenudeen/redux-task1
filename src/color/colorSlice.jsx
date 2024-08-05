import { createSlice } from "@reduxjs/toolkit";

const initialState={
    color:'blue'
}

const colorSlice=createSlice({
    name:'color',
    initialState,
    reducers:{
        toggleColor:(state)=>{
            state.color=state.color=== 'blue' ? 'red' : 'blue'
        }
    }

})

export default colorSlice.reducer
export const {toggleColor}=colorSlice.actions