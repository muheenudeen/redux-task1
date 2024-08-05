
import { useSelector } from "react-redux";

const Display=()=>{
    const name=useSelector((state)=>state.form.form)
    console.log(name);
    
    return(
        <>

        <h1>{name}</h1>
        
        </>
    )
}
export default Display

