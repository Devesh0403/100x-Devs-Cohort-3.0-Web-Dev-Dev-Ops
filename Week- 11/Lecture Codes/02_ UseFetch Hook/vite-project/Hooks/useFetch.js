import { useEffect,useState } from "react";
// export function usePostTitle(){

//     const [post, setpost] = useState({});

//   async function getPosts(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const json=await response.json();
//     setpost(json)
//   }

//   useEffect(()=>{
//     getPosts();

//   },[])

//   return post.title

// }

export function useFetch(url,timeOut){
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading]=useState(true)

    async function getDetails(){
        setLoading(true)
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);
        setLoading(false)

    }
    useEffect(()=>{
        getDetails();

    },[url]);

    useEffect(()=>{
      setInterval(getDetails,timeOut);

    },[])

    return{
        finalData,
        loading
    }
}


// import { useState, useEffect } from 'react'

// // Custom hook for fetching data
// function useFetch(url) {

//   const [data, setData] = useState(null) // State for data
//   const [loading, setLoading] = useState(true) // State for loading
//   const [error, setError] = useState(null) // State for error handling

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true)
//       setError(null)

//       try {
//         const response = await fetch(url)

//         if (!response.ok) {
//           throw new Error(`An error occurred: ${response.statusText}`)
//         }

//         const jsonData = await response.json()
//         setData(jsonData)
//       } catch (error) {
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [url]) // Dependency array with url

//   return { data, loading, error }
// }




