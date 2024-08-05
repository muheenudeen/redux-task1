import { useDispatch, useSelector } from "react-redux"
import { toggleColor } from "./colorSlice"


const Color=()=>{

    const color=useSelector((state)=>state.color.color)
    const dispatch=useDispatch()
    return(
        <>
        <div
        onClick={()=>dispatch(toggleColor())}
        style={{backgroundColor:color, width:'100px' , height:'100px'}}>clickMe</div>
        
        </>
    )
}
export default Color