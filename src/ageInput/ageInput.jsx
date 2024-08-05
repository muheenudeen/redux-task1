import { useState } from "react"
import { useDispatch } from "react-redux"
import { submit } from "./ageSlice"


const AgeInput=()=>{
    const [age,setAge]=useState("")
    const dispatch=useDispatch()
    return(
        <>
        <input 
        type="number"
        placeholder="age"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
         />

         <button onClick={()=>dispatch(submit({age}))}>submit</button>
        
        </>
    )
}
// console.log(submit);

export default AgeInput