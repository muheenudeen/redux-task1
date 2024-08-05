import { useDispatch, useSelector } from "react-redux"
import { colorsToggler1 } from "./twoSlice"
import { useState } from "react"


const Dubblecolor=()=>{
const [flag,setFlag]=useState(false)
    const Colors1=useSelector((state)=>state.Colors.Colors1)
    // const flag=useSelector((state)=>state.Colors.flag)
    const Colors2=useSelector((state)=>state.Colors.Colors2)

    const dispatch=useDispatch()
    return(
        <>
        <div onClick={()=>{setFlag(!flag);dispatch(colorsToggler1(flag))}} style={{backgroundColor:Colors1, width:'100px', height:'100px'}}>first</div>
        <div onClick={()=>{setFlag(!flag);dispatch(colorsToggler1(flag))}} style={{backgroundColor:Colors2, width:'100px', height:'100px'}}>second</div>


        </>
    )
}

export default Dubblecolor