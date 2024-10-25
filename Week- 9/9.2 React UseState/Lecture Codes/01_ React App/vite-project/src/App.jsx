import { useState,useEffect } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  const [counterVisible,setCounterVisible]=useState(true);

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c=>!c)
    },5000)
  },[])


  return (
    <>
      hello there
      {counterVisible?<Counter/>:null}
    </>
  )
}

//mounting, re-rendering, unmounting
function Counter(){
  const [count,setCount]=useState(0);
  // function increaseCount(){
  //   setCount(count+1);

  // }
  // function decreaseCount(){
  //   setCount(count-1);

  // }
  // function reset(){
  //   setCount(0);
  // }
  // console.log("counter");


// To guard setInterval from re-renders
  useEffect(function(){
    // Mounting Logic
    console.log("Mounting")
    let clock=setInterval(function(){
         console.log("From inside setInterval")
         setCount(count=>count+1)
     },1000)

    //Unmounting Logic
  return function(){
    console.log("Un-mounting")
    clearInterval(clock);

  }
    
  },[]);//Dependency array is empty so that this function 
  //runs on the first mount only

  // setInterval(function(){
  //   setCount(count+1)
  // },1000)
  
  return <div>
    <h1>{count}</h1>
    {/* <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={reset}>Reset</button> */}

  </div>
}

export default App
