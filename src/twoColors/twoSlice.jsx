import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Colors1:'green',
    Colors2:'black',
    // flag:false

}

const TwoSlice=createSlice({
    name:'Colors',
    initialState,
    reducers:{
        colorsToggler1:(state,action)=>{
            // console.log(action)
            state.Colors1= action.payload?'black': 'green'
            state.Colors2=action.payload?'green': 'black'
            
        },
        
    }
})

export default TwoSlice.reducer
export const {colorsToggler1 , colorsToggler2}=TwoSlice.actions