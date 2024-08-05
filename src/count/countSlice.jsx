import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

const countSlice=createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }

    }
})

export default countSlice.reducer
export const {increment,decrement}=countSlice.actions