import { createSlice } from "@reduxjs/toolkit";

const initialState={
    form:""
}

const FormSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.form=action.payload.form
        }
    }

})

export default FormSlice.reducer
export const {submit}=FormSlice.actions