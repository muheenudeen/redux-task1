import { Provider } from "react-redux"
import Display from "./form/display"
import Input from "./form/input"
import store from "./form/store"
import AgeDisplay from "./ageInput/ageDisplay"
import AgeInput from "./ageInput/ageInput"
import Color from "./color/color"
import Dubblecolor from "./twoColors/1input"
import Counter from "./count/counter"


function App() {

  return (
    <>
    <Provider store={store}>
    <Input/>
    <Display/>
    <AgeDisplay/>
    <AgeInput/>
    <Color/>
    <Dubblecolor/>
    <Counter/>
    </Provider>
    
    
    </>
  )
}

export default App
