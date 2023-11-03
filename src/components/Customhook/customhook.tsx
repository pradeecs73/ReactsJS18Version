import React,{useState,useEffect, useCallback,useContext} from 'react';

const  CustomhookCounter=(props:any)=>{
    const [count1,setCount]=useState(0);
    const increment=()=>setCount(count1+1);
    const decrement=()=>setCount(count1-1);
    return {count1,increment,decrement}
}

export default CustomhookCounter;