import { useState } from "react"
import { useDispatch } from "react-redux"
import { submit } from "./formSlice"


const Input=()=>{

    const [name,setName]=useState("")
    const dispatch=useDispatch()
    return(

        <>
        <h1>Form</h1>
        <input 
        type="text"
        value={name}
        placeholder="enter name"
        onChange={(e)=>setName(e.target.value)} />
        
        <button onClick={()=>dispatch(submit({form:name}))}>submit</button>

        </>

    )
}


export default Input