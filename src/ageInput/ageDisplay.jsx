import { useSelector } from "react-redux"


const AgeDisplay=()=>{
    const age=useSelector((state)=>state.age.age)
    return(
        <>
        <h1>{age}</h1>
        </>
    )
}

export default AgeDisplay