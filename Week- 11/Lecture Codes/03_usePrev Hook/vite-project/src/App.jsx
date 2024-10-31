import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useFetch} from '../Hooks/useFetch';
import { usePrev } from '../Hooks/usePrev';


function App() {

  const [currentPost,setCurrentPost]=useState(0)
  const prev=usePrev(currentPost);

  return (
    <>
    

    <button onClick={()=>setCurrentPost(currentPost+1)}>Increase {currentPost}</button>
    <p>Previous value was {prev}</p>
    </>
    
    
  )
}

export default App
