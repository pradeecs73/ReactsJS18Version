import React, { Component } from 'react';

import  './Newpost.css';



class Newpost extends Component<{},{}> {

    constructor(props:any)
    {
       super(props);
    }

    addPost(){
      
    }

    render() {

        return (
          <div className='newpost'>
                 <div><input type="text"></input></div>
                 <div><button onClick={this.addPost}>submit</button></div>
          </div>
        );
      }

}

export default Newpost;