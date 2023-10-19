import React, { Component } from 'react';
import  './Counter.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import $ from 'jquery';
import AuthContext from './../../context/auth-context';

interface counterInterface{
    onIncrementCounter:any;
    onAddCounter:any;
    onDecrementCounter:any;
    onSubtractCounter:any;
    onStoreResult:any;
    storedResults:any;
    onDeleteResult:any;
    ctr:any;
}

class Counter extends Component<counterInterface,{}> {

    static contextType = AuthContext;
    context: React.ContextType<typeof AuthContext>
   
    constructor(props:any,context:any)
    {
       super(props);
       this.context=context;
       
    }
   
  
    

    render() {
        return(
            <>
            <div style={{textAlign:"center"}}>
               <p>counter value:{this.props.ctr}</p>
               <p> {this.context.shortenData("Bangalore is the capital of Karnatka")} </p>
               <button onClick={()=>this.props.onIncrementCounter()}>Increment Counter</button><br/>
               <button onClick={()=>this.props.onAddCounter()}>Add 10</button><br/>
               <button onClick={()=>this.props.onDecrementCounter()}>Decrement Counter</button><br/>
               <button onClick={()=>this.props.onSubtractCounter()}>Subtract 10</button><br/>
               <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button><br/>
               <ul>
                    {this.props.storedResults.map((strResult:any,index:any) => {
                      return  <li key={strResult.id} onClick={() => this.props.onDeleteResult(index)}>{strResult.value}</li>
                    })}
                </ul>
            </div>
            </>
        )
    }


}

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
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(10)),
        onStoreResult: (result:any) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (counterIndex:any) => dispatch(actionCreators.deleteResult(counterIndex))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);