import React,{useState,useEffect, useCallback,useContext} from 'react';

const  CustomhookCounter=(props:any)=>{
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    return {count,increment,decrement}
}

export default CustomhookCounter;