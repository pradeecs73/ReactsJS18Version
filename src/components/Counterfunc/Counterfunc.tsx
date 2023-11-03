import React, { useState,useEffect, useCallback,useContext} from 'react'
import AuthContext from './../../context/auth-context';
import  './Counterfunc.css';
import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import CustomhookCounter from './../Customhook/customhook';

const Counterfunc = React.memo((props:any) => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const authContext=useContext(AuthContext);
  const customHookValue=CustomhookCounter(25);

  const reduxstatecounter=useSelector((state:any)=>{
     return state;
  });

  const dispatch=useDispatch();

  useEffect(() => {
     console.log('customhook value',customHookValue);
     console.log("use effect called count");
  }, [count,customHookValue.count1]);

  const increment = useCallback(() => {
    customHookValue.increment();
    setCount((prevCount:any) => prevCount + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount((prevCount:any) => prevCount - 1)
  }, [count])
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])
  

  return (
 
    <React.Fragment>
     <div id='main'>  
         <div><button onClick={increment}>Increment</button></div>
         <div><button onClick={decrement}>Decrement</button></div>
         <div><button onClick={incrementOtherCounter}>incrementOtherCounter</button></div>
         <div>
           <button onClick={()=>props.onIncrementCounter()}>Increment Counter with redux</button>
         </div>
         <div>
         <button onClick={()=>props.onDecrementCounter()}>Decrement Counter with redux</button><br/>
         </div>
         <div>
            <button onClick={()=>dispatch(actionCreators.increment())}>Increment Counter with hook</button><br/>
         </div>
         <div>
            <button onClick={()=>dispatch(actionCreators.decrement())}>Decrement Counter with hook</button><br/>
         </div>
      </div> 
      
      <div id='para'>
        <>
          <div>
          <>
             Count: {count}<br></br>
             {authContext.shortenData("shorten the text i studided engineering")}
          </>
         </div>
          <div>
              <p>counter value:{props.ctr}</p>
          </div>
            <div>
                <p>counter value by hooks redux:{reduxstatecounter.ctr.counter}</p>
            </div>
          </>
        </div> 
        
    </React.Fragment>
   
       
  )
});

//export default Counterfunc;

const mapStateToProps = (state:any) => {
  return {

      ctr: state.ctr.counter,
      counterOperation:state.ctr.counterOperation,
      storedResults: state.res.results
  }
};

const mapDispatchToProps = (dispatch:any) => {
  return {
      onIncrementCounter: () => dispatch(actionCreators.increment()),
      onDecrementCounter: () => dispatch(actionCreators.decrement()),
  
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counterfunc); 