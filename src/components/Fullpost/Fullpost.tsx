import React, { Component } from 'react';
import axios from 'axios';
import  './Fullpost.css';



class FullPost extends Component<{},{}> {

    state={
       postId:"",
       loadedPost: {title:"",body:""},
       fullPostData:false,
       queryParam:[]
    }

    constructor(props:any)
    {
     
       super(props);
       console.log(props.match.path);
       this.state.postId=props.match.params.id;
       this.state.queryParam=props.location.search;
    }

    componentDidMount(){ 
       const query:any = new URLSearchParams(this.state.queryParam);
        for (let param of query.entries()) {
            console.log(param[1]); 
        }

      axios.get("/posts/"+this.state.postId)
        .then(response =>{
                this.setState({fullPostData:true,loadedPost:response.data});
        }).catch((error:any)=>{
            console.log(error);
        });
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.state.postId)
            .then(response => {
                console.log(response);
            });
    }

    render() {

         let post=null;

        if ( this.state.fullPostData ) {
          post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={()=>this.deletePostHandler()} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        

        return post;

    }

}

export default FullPost;
