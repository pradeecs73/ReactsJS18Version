import React, { Component } from 'react';

import  './Post.css';
interface postInterface{
    title:any,
    clicked:any,
    id:any
}

class Post extends Component<postInterface,{}> {

    constructor(props:any)
    {
       super(props);
    }

    render() {
        return(   
               <div className="Postblock" onClick={()=>this.props.clicked(this.props.id,this)}>
                 <p>Title: {this.props.title}</p>
               </div>    
        )
    }

}

export default Post;