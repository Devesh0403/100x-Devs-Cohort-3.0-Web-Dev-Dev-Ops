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

export function useFetch(url){
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

    return{
        finalData,
        loading
    }
}

