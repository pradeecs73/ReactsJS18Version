import React, { Component } from 'react';
import axios from 'axios';
import Post from './../../components/Post/Post';
import  './Posts.css';



class Posts extends Component<{},{}> {

    state={
        posts:[]
    }

    constructor(props:any)
    {
       super(props);
    }

    componentDidMount(){
      
        axios.get("/posts")
        .then(response =>{
                this.setState({posts:response.data.slice(0,9)});
        }).catch((error:any)=>{
              console.log(error);
        });
        
    }

    loadSinglePost(postId:any,thisinstance:any)
    {
        thisinstance.props.history.push('/posts/'+postId+"?serchedtext='bike'");
    }

    render() {

        const posts=this.state.posts.map((post:any) =>
            {
                 return   ( <Post id={post.id} key={post.id} {...this.props} title={post.title} clicked={this.loadSinglePost}></Post>) 
            }); 
            
        return(   
               <div className="Postsblock">
                  {posts}
               </div>    
        )
    }

}

export default Posts;