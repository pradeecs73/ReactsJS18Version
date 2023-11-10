import React,{useEffect,useState,useRef} from 'react';
import Counter from './../../hoc/CounterHigherorder'; 

const HocMouseOver=(props:any)=>{

    return (
        <div>
           <button onMouseOver={()=>props.increment()}> mouseover me {props.count}</button>
        </div>

    )

}

export default Counter(HocMouseOver);