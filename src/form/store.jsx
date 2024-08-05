import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import ageSlice from "../ageInput/ageSlice";
import colorSlice from "../color/colorSlice";
import twoSlice from "../twoColors/twoSlice";
import countSlice from "../count/countSlice";


const store=configureStore({
    reducer:{
    
        form:formSlice,
        age:ageSlice,
        color:colorSlice,
        Colors:twoSlice,
        count:countSlice,
        
    }
})

export default store