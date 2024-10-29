import { useState,createContext,useContext } from 'react'

const BulbContext=createContext();

export function BulbProvider({children}){
  const [bulbOn,setBulbOn]=useState(true);
  
  return(

    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
    {children}
    </BulbContext.Provider>
  )

}

function App() {
  
  
  return (
    <>
    <BulbProvider>

    <LightBulb/>
     {/* Returning the LightBulb component */}
    </BulbProvider>
    
    </> 
  )
}

function LightBulb(){
   //defining the state in the lowest common ancestor
  //Array destructuring as useState gives an array of 2 elements i.e. state variable and function to update the state

  return(
    <div>
      <BulbState /> 
      {/* Passing the bulbOn state to the BulbState component */}

      <ToggleBulbState />
      {/* Passing the bulbOn state & the setBulbOn function to the ToggleBulbState component */}


    </div>
  )
}

//BulbState component
function BulbState(){

  const {bulbOn,setBulbOn}=useContext(BulbContext)
  //Using the context by the App component using the useContext by react
  
  return(
    <div>
      {bulbOn?"Bulb On":"Bulb Off"}
      {/* Renders "Bulb On" or "Bulb Off" based on the value of bulbOn */}

    </div>

  )
}

//ToggleBulbState component
function ToggleBulbState(){

  const {bulbOn,setBulbOn}=useContext(BulbContext)

  //Toggles the state when the button gets clicked
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
