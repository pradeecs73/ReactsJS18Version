import React,{useEffect,useState,useRef} from 'react'; 

import Counter from './../../hoc/CounterHigherorder';

const HocClick=(props:any)=>{

    return (
        <div>
           <button onClick={()=>props.increment()}>Click Me{props.count}</button>
        </div>

    )

}

export default Counter(HocClick);