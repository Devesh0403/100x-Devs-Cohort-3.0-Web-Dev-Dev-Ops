import { useState,useRef } from "react"
import {BrowserRouter, Routes,Route,Link,useNavigate,Outlet} from "react-router-dom"
function App() {
  const [currentCount,setCurrentCount]=useState(0)
  const timer=useRef();

  function increaseCount(){
    setCurrentCount(count=>count+1);
  }

  function startClock(){
    let value=setInterval(increaseCount,1000);
    timer.current=value

  }

  function stopClock(){
    clearInterval(timer.current)
    
  }
  
  

  return (
    <div>
      {/* <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage/>} />
        </Route>

      
      
      
      </Routes>
      </BrowserRouter> */}

      {currentCount}
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>

      
    </div>
  )
}

function Layout(){
  return <div style={{height:"100vh"}}>
    <Header/>
    <div style={{backgroundColor:"yellow",height:"80vh"}}>

    <Outlet/>
    </div>
    <Footer/>
  </div>
}

function Header(){
  return(
    <div style={{backgroundColor:"red",height:"10vh"}}>
    <Link to="/">Allen </Link>
      <Link to="/neet/online-coaching-class-11">Class 11 </Link>
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  )

}
function Footer(){
  return(
   <div style={{backgroundColor:"red",height:"10vh"}}>Footer</div>
  )

}

function Landing(){
  return <div>hello</div>
}


function Class12Program(){
  return <div>hello2</div>
}


function Class11Program(){
  const navigate=useNavigate();
  function redirectUser(){
    navigate("/")
  }
  return <div>hello3
    <button onClick={redirectUser}>Go back</button>

  </div>
}

function ErrorPage(){
  return <div>Error</div>
}

export default App
