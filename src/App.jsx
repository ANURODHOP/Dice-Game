import React,{useState} from "react"
import OuterPg from "./Component/OuterPg"
import MainGame from "./Component/MainGame";



function App() {
  const [playbtn,setBtn] = useState(false)

  function handleBtn(){
    setBtn((prev)=>!prev);
  }
  return (
    <>
      {
        playbtn == false ? <OuterPg handleBtn={handleBtn}/> : <MainGame />
      }
    </>
  )
}

export default App
