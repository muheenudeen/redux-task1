import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./countSlice"


const Counter=()=>{

    const count=useSelector((state)=>state.count.value)
    const dispatch=useDispatch()
    return(
        <>

        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>

<h1>{count}</h1>
       
        </>
    )
}

export default Counter