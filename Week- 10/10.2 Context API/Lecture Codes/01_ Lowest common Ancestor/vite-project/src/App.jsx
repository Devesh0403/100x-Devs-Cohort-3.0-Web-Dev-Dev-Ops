import { useState } from 'react'


function App() {
  

  return (
    <><LightBulb/></>
  )
}

function LightBulb(){
  const [bulbOn,setBulbOn]=useState(true)
  return(
    <div>
      <BulbState bulbOn={bulbOn}/>
      <ToggleBulbState setBulbOn={setBulbOn} bulbOn={bulbOn}/>


    </div>
  )
}

function BulbState({bulbOn}){
  
  return(
    <div>
      {bulbOn?"Bulb On":"Bulb Off"}

    </div>

  )
}
function ToggleBulbState({setBulbOn,bulbOn}){
  function toggle(){
    setBulbOn(!bulbOn)
  }
  return(
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>

  )
}

export default App
