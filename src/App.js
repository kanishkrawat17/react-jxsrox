import React ,{useState, useEffect}from "react";
import "./style.css";
import Data from "./Data"

export default function App() {
    const [count , setCount] = useState(0);
    const [message , setMessage] = useState("");
    const [data, setData] = useState("");
  // useEffect(()=>{
  //   console.log("useEffect 1");
  //   document.title = "hello";
  // })
  const fetchData = ()=>{
    console.log("fethDataFunction")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then((data)=>{
         setData(JSON.stringify(data))
      })
  }
  useEffect(()=>{
    console.log("useEffect-1"); 
    // componentDidMount & componentDidUpdate(runs everytime on state update & comp mount)
  })
  useEffect(()=>{ 
    //componentDidMount(only ince when components mounts
    console.log("useEffect- 2");
  },[])

  // useEffect(()=>{
  //   console.log("useEffect- 3");
  //   document.title = "HII-1";
  // },[count])

  console.log(data);
  return (
    <>
    {/* {data.length == 0 ? 
       <> <button onClick = {fetchData}> getData</button>
       <button onClick = {()=>{
         setCount(count+1)
       }}> +1</button>
       <br/>
       <br/>
       <button  onClick = {()=>{
         setCount(count-1)
       }}> -1</button>
       <h1>{count}</h1></>
      : data.map((el)=>{
        return <p>{el.name}</p>
    })} */}

    {data.length == 0 ? <button onClick={fetchData}>getData </button> : JSON.stringify(data)}

    <Data data={data}/>

    {/* <button onClick = {fetchData}> getData</button>
    <button onClick = {()=>{
      setCount(count+1)
    }}> +1</button>
    <br/>
    <br/>
    <button  onClick = {()=>{
      setCount(count-1)
    }}> -1</button>
    <h1>{count}</h1> */}

    {/* <Data data={data}/> */}

    </>
  );
}
