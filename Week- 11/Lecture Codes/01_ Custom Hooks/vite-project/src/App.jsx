import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//Custom Hooks
//  Custom Hooks Require 3 things
//  1. Name to start with use..
//  2. Usage of the state
//  3. returning the state
// Now we can use this custom hook in other components. Similar to functions
function useCounter(){
  const [count,setCount]=useState(0);

  function increaseCount(){
    setCount(count+1);
  }

  return{
    count:count,
    increaseCount:increaseCount
  }
}

function App() {
  return(
    <div>
     {/* Using the custom Hook Component */}
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    </div>
  )
  
}

function Counter(){
  //Using the custom Hook
  const {count, increaseCount} = useCounter();


  return (
    <>
    <button onClick={increaseCount}>Increase {count}</button>
    </>
  )

}

export default App
