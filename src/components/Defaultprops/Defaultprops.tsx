import React,{useEffect,useState} from 'react'; 
import axios from 'axios';
  
const Defaultprops=(props:any)=> { 
  return ( 
    <div > 
      <Person name="kapil" eyeColor="blue" age="23"></Person> 
      <Person name="Sachin" eyeColor="blue" ></Person> 
      <Person name="Nikhil" age="23"></Person> 
      <Person eyeColor="green" age="23"></Person> 
      <Apiresult></Apiresult>
    </div> 
  ); 
} 

const Apiresult=(props:any)=>{
    const [apiData,setApiData]=useState([]);

    useEffect(()=>{
      axios.get("/posts")
      .then(response =>{
        setApiData(response.data.slice(0,5));
      }).catch((error:any)=>{
            console.log(error);
      });
    });

    const posts=apiData.map((post:any) =>
    {
         return   (<div id={post.id} key={post.id}>{post.title}</div>) 
    }); 

    return(
         <div>
            {posts}
         </div>
    )

}
  
const Person=(props:any)=>{ 
  return ( 
    <div> 
      <p> Name: {props.name} </p> 
      <p>EyeColor: {props.eyeColor}</p> 
      <p>Age : {props.age} </p> 
      <hr></hr> 
    </div> 
  ) 
} 
  
Person.defaultProps = { 
  name: "Rahul", 
  eyeColor: "deepblue", 
  age: "45"
} 
  
export default Defaultprops;