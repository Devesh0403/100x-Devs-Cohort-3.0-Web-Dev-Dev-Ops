import { useState,useEffect } from "react"
function App() {
  const [count,setCount]=useState(0);

  function increase(){
    setCount(count+1)
  }
  

  return (
    <div>
    <Counter count={count}/>
    <button onClick={increase}>Increase Count</button>
      
    </div>
  )
}

function Counter(props){
  useEffect(function(){
    console.log("Mount")

    return function(){
      console.log("Unmount")
    }
  },[]);

  useEffect(function(){
    console.log("Count has changed")
  },[props.count]);

  return (
    <>
    Counter {props.count}
    </>
  )

  

}

export default App
