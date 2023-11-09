import React,{useEffect,useState,useRef} from 'react'; 
import {useParams,useLocation} from 'react-router-dom'; 
import axios from 'axios';
  
const Defaultprops=(props:any)=> { 
const [nation,setNation]=useState("india");
const params:any=useParams();
let queryParam:any=useLocation().search;
const inputRef:any = useRef();

  useEffect(()=>{
    inputRef.current.focus();    
    console.log('params',params['id']);
  },[]);

  return ( 
    <div > 
      <Person name="kapil" eyeColor="blue" age="23"></Person> 
      <Person name="Sachin" eyeColor="blue" ></Person> 
      <Person name="Nikhil" age="23"></Person> 
      <Person eyeColor="green" age="23"></Person> 
      <p>Nation is : {nation}</p>
      <div>
        <button onClick={()=>setNation('bharat')}>set Nation</button>
      </div>
      <Apiresult  ref={inputRef}  nationName={nation}></Apiresult>
    </div> 
  ); 
} 

const Apiresult=React.forwardRef((props:any,ref:any)=>{
    const [apiData,setApiData]=useState([]);
    const { nationName } = props;
    const [nationNameChange,setNationNameChange]=useState(nationName);

    useEffect(()=>{
      axios.get("/posts")
      .then(response =>{
        console.log('called');
        setApiData(response.data.slice(0,5));
      }).catch((error:any)=>{
            console.log(error);
      });
    },[]);

    useEffect(()=>{
      setNationNameChange(nationName);
    },[nationName]);

    const posts=apiData.map((post:any) =>
    {
         return   (<div id={post.id} key={post.id}>{post.title}</div>) 
    }); 

    return(
         <div>
            {posts}
            <div>
                <p>national name  from prop : {nationName}</p>
                <p>national name  through change : {nationNameChange}</p>
                <input type='text'  ref={ref} />
            </div>
         </div>
    )

});
  
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