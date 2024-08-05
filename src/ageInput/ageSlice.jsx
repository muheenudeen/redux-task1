import { createSlice } from "@reduxjs/toolkit";

const initialState={
    age:""

}

const ageSlice=createSlice({
    name:'age',
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.age=action.payload.age
        }
    }

})


export const {submit}=ageSlice.actions
export default ageSlice.reducer