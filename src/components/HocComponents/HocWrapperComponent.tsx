import React,{useEffect,useState,useRef} from 'react'; 
import HocClick from './HocClick';
import HocMouseOver from './HocMouseOver';

const HocWrapperComponent=()=>{

    return (
        <div>
           <HocClick></HocClick><br></br><br></br>
           <HocMouseOver></HocMouseOver>
        </div>

    )

}

export default HocWrapperComponent;