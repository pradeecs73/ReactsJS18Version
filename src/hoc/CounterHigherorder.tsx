import React,{useState,useEffect, useCallback,useContext} from 'react';

const  Counter=(WrappedComponent:any)=>{

  
    const Wrapped=(props:any)=>{
        const [count,setCount]=useState(0);
        const increment=()=>setCount(count+1);

        return (<WrappedComponent count={count} increment={increment}></WrappedComponent>)

    }

    return Wrapped;
}

export default Counter;