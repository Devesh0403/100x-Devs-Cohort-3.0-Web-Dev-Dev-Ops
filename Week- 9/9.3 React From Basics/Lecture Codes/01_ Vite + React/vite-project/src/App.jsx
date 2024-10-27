import { useState,useEffect } from "react";
function App() {

  const [posts,setPosts]=useState([]);
  const todos=[{
    title:"Go to gym",
    done:false,
    id:1
  },{
    title:"Eat food",
    done:true,
    id:2
  }]

  const todoComponents=todos.map(todo=><Todo title={todo.title} done={todo.done} key={todo.id}/>)

  // setPosts({
  //   name:"devesh",
  //   subtitle:"100 followers",
  //   time:"2 mins ago",
  //   desc:"lorem aasna amnsam amnsmansma asnasaj ajs"
  // },{
  //   name:"devesh",
  //   subtitle:"100 followers",
  //   time:"2 mins ago",
  //   desc:"lorem aasna amnsam amnsmansma asnasaj ajs"
  // },{
  //   name:"devesh",
  //   subtitle:"100 followers",
  //   time:"2 mins ago",
  //   desc:"lorem aasna amnsam amnsmansma asnasaj ajs"
  // })

  


  const postComponents=posts.map(post=>
    <Post 
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    desc={post.desc} />
  )

  function addPost(){
    setPosts([...posts,{
        name:"devesh",
        subtitle:"100 followers",
        time:"2 mins ago",
        desc:"lorem aasna amnsam amnsmansma asnasaj ajs"
      },])
  }
  

  return (
    <div style={{height:"100vh",justifyContent:"center", width:"30%",backgroundColor:"grey",margin:"auto", padding:16}}>
      
      {/* <Post name={"Devesh"} subtitle={"20 followers"} time={"2 min"} desc={"loremaanjansjans asnba anbsna asnab absna nabsna  nabsna "}/>
      <Post name={"Devesh"} subtitle={"20 followers"} time={"2 min"} desc={"loremaanjansjans asnba anbsna asnab absna nabsna  nabsna "}/>

      <Post name={"Devesh"} subtitle={"20 followers"}  desc={"loremaanjansjans asnba anbsna asnab absna nabsna  nabsna "}/> */}

      {/* <ToggleMessage/>
      <ToggleMessage/>
      <ToggleMessage/> */}
      
      
      {postComponents}
      <button onClick={addPost}>Add Post</button>

      <Clock/> 

      {todoComponents}
      </div>

  )
}
function Todo({title,done}){
  return(

    <div>

    {title}-{done?"done":"Not done"}
  </div>
  )
}

const style={width:200, backgroundColor:"white",borderRadius:10,borderColor:"grey",display:"flex"}

 function Post(props){

  return(
  <div style={{margin:20,backgroundColor:"white", borderRadius:16,padding:16}}>
  
  <div style={style}>
    <img src={"https://www.google.com/imgres?q=logo%20images&imgurl=https%3A%2F%2Fuploads.vw-mms.de%2Fsystem%2Fproduction%2Fimages%2Fvwn%2F030%2F145%2Fimages%2F7a0d84d3b718c9a621100e43e581278433114c82%2FDB2019AL01950_web_1600.jpg%3F1649155356&imgrefurl=https%3A%2F%2Fwww.volkswagen-newsroom.com%2Fen%2Fimages%2Fdetail%2Fvolkswagen-logo-30145&docid=8XvCtqyvzBBScM&tbnid=npTqYGfmOHYqZM&vet=12ahUKEwjHq6m6vauJAxUTxjgGHYsoIeYQM3oECG0QAA..i&w=1600&h=1600&hcb=2&ved=2ahUKEwjHq6m6vauJAxUTxjgGHYsoIeYQM3oECG0QAA"} style={{width:30, height:30,borderRadius:20}} alt="" />
    <div style={{marginLeft:10,fontSize:16}}>
      <b>{props.name}</b>
      <div>{props.subtitle}</div>
      {(props.time!= undefined) && <div>{props.time}</div>}
    </div>
  </div>
  <div>{props.desc}</div>
  </div>
 )}

const ToggleMessage=()=>{
  let [isVisible,setIsVisible]=useState(true);

  function toggle(){
    setIsVisible(!isVisible)
  }


  return(
    <div>
      <button onClick={toggle}>Toggle Message</button>
      {isVisible &&  <div>Message is shown now</div>}
    </div>
  )

}

const Clock=()=>{
  throw new Error("error")
  const [count,setcount]=useState(0);

  function increaseCount(){
    setcount(prev=>prev+1)
  }

  
  useEffect (function(){
    setInterval(increaseCount,1000);
    
  },[])

  useEffect (function(){
    console.log("count changes")
    
  },[count])

  return(
    <div>
      Counter {count}
    </div>
  )
}

export default App
