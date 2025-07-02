import React,{useState} from 'react'

const Counter=(WrappedComponent:any)=>{
    

       const Wrap=(props:any)=>{
              const [count,setCount]=useState(0)
              const increment=()=>setCount(count+1)
           return (<WrappedComponent  count={count}  increment={increment}></WrappedComponent>)
       }

      return Wrap
}


const HocClick=(props:any)=>{
    return(
        <div>
             <button onClick={()=>props.increment()}> click me {props.count}</button>
        </div>
    )
}

 const HocClickEnhanced=Counter(HocClick)

const HocMouseOverReact=(props:any)=>{
    return(
        <div>
             <button onMouseOver={()=>props.increment()}> click me {props.count}</button>
        </div>
    )
}

 const HocMouseOverReactEnhanced=Counter(HocMouseOverReact)

const  App=() =>{
  return (
   <div>
     <HocClickEnhanced></HocClickEnhanced>
      <HocMouseOverReactEnhanced></HocMouseOverReactEnhanced>
       </div>
  )
}

export default App
