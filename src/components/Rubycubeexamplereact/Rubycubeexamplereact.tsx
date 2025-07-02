import React,{useState,useEffect} from 'react'

const Rubycubyexamplereact= (props:any) => {
    const myarryCopy=[true,true,true,true,false,false,true,true,true]
    const [myarry,setMyarray]=useState(myarryCopy)
    
    useEffect(()=>{

    })


    const changeColor=(index:any,event:any)=>{
        let newArray=[...myarry]
        if( newArray[index]){
            newArray[index]=false
           setMyarray(newArray)
          const booleanValue=newArray.some((item)=>item)
           if(!booleanValue){
              setMyarray(myarryCopy)
             }else{
                setTimeout(()=>{
                  event.target.style.backgroundColor ="green"
               },100)
             }
           
        }
       
    }

    const renderCube=(array:any)=>{
 
           return( array.map((item:any,index:any)=>{
                   return (
                       <div  onClick={(event)=>changeColor(index,event)}
                           style={{backgroundColor:item?'red':undefined,width:'20px',border:'1px solid black',height:'20px'}} key={index}>
                           
                       </div>
                     
                   )  
             }))
            
    }

    return (
        <div >
            <div style={{display:'flex',flexWrap:'wrap',width:'65px'}}>
                 {renderCube(myarry)}
            </div>
            <br></br>

        </div>
    )
}

export default Rubycubyexamplereact;