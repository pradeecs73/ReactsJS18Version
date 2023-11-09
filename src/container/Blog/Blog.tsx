import React, { Component,Suspense } from 'react';
import  './Blog.css';
import Posts from './../../components/Posts/Posts';
//import Newpost from './../../components/Newpost/Newpost';
import Fullpost from './../../components/Fullpost/Fullpost';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import asyncComponent from './../../hoc/asyncComponent';
import AuthContext from './../../context/auth-context';

const AsyncNewPost = asyncComponent(()=>{
   return import('./../../components/Newpost/Newpost');
});

const Newpostcomponent=React.lazy(()=> import('./../../components/Newpost/Newpost'));



class Blog extends Component<{},{}> {

    static contextType = AuthContext;
    context: React.ContextType<typeof AuthContext>

    constructor(props:any,context:any)
    {
    
       super(props);
       this.context=context;
       
    }
   

    render() {

        return(
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/posts" >Posts</Link></li>
                            <li><Link to="/newpost">New Post</Link></li>
                            <li><Link to="/person">Person</Link></li>
                            <li><Link to="/cockpit">Cockpit</Link></li>
                            <li><Link to="/counter">Counter</Link></li>
                            <li><Link to="/bootstrapexample">B4example</Link></li>
                            <li><Link to="/Form">Form</Link></li>
                            <li><Link to="/ingredients">Ingredients</Link></li>
                            <li><Link to="/counterfunc">Counter func</Link></li>
                            <li><Link to="/arrayopeartion">Array opeartion</Link></li>
                            <li><Link to="/reacttesting">React Testing Inputs</Link></li>
                            <li><Link to="/defaultprops/2">Default props</Link></li>
                            <li><Link to="/nestedarray">Nested array</Link></li>
                            <li><Link to="/functioncontext">Function Context</Link></li>
                        </ul>
                    </nav>
                </header>
                        
                   <Switch>
                          
                  </Switch>         
            </div>
        )
    }

}

export default Blog;