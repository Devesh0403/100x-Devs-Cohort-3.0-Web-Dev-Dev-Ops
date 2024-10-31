import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useFetch, usePostTitle } from '../Hooks/useFetch';


function App() {

  const [currentPost,setCurrentPost]=useState(1)
  const {post,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost,10000)
  
  if(loading){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <>
    <button onClick={()=>setCurrentPost(1)}>1</button>
    <button onClick={()=>setCurrentPost(2)}>2</button>
    <button onClick={()=>setCurrentPost(3)}>3</button>
    {JSON.stringify(post)}</>
    
    
  )
}

export default App
