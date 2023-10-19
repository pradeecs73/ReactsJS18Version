import React, { Component } from 'react';
import  './Personchild.css';

interface personchildInterface{
    parenttochilddate:any;
    modifydata:any;
    RenderBelowText:any;
}

class Personchild extends Component<personchildInterface,{}> {

    constructor(props:any)
    {
       super(props);
      
    }

    render() {

        return(
            <div>
                <p>Data from parent component is {this.props.parenttochilddate} </p>
                <button onClick={()=>this.props.modifydata("myparentdata")}>Modify data</button>
                <p>{this.props.RenderBelowText('mysore')}</p>
                <p>{this.props.RenderBelowText('bangalore')}</p>
            </div>
        )
    }

}

export default Personchild;