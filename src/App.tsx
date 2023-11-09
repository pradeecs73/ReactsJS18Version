import React,{ Component,Suspense} from 'react';
import './App.css';
import Person from './components/Person/Person';
import Cockpit  from './components/Cockpit/Cockpit';
import AuthContext from './context/auth-context';
import Blog from './container/Blog/Blog';
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import Counter  from './components/Counter/Counter';
import B4example  from './components/B4example/B4example';
import Form  from './components/Forms/Form';
import Ingredients  from './components/Ingredients/Ingredients';
import Arrayoperation  from './components/Arrayoperation/Arrayoperation';
import Counterfunc  from './components/Counterfunc/Counterfunc';
import ReactTesting  from './components/ReactTesting/ReactTesting';
import Posts from './components/Posts/Posts';
import Fullpost from './components/Fullpost/Fullpost';
import Newpost from './components/Newpost/Newpost';
import Defaultprops from './components/Defaultprops/Defaultprops';
import NestedArray from './components/NestedArray/NestedArray';
import FunctionContext from './components/FunctionContext/FunctionContext';

const Newpostcomponent=React.lazy(()=> import('./components/Newpost/Newpost'));

class App extends Component<{},{}> {
  static contextType = AuthContext;
  context: React.ContextType<typeof AuthContext>

  constructor(props:any,context:any)
    {
       super(props);
       this.context=context;
    }

    state = {
      
      authenticated: false,
      receivedData:""

    };

    loginHandler = () => {
      this.setState({ authenticated: true });
    };


    shortenText=(str:any)=>{

         return str.substr(0,25);
    }
  

    render() {

        return (
          <BrowserRouter>
              <div className="App">
                    <AuthContext.Provider
                          value={{
                            authenticated: this.state.authenticated,
                            login: this.loginHandler,
                            receivedData:this.state.receivedData,
                            shortenData:this.shortenText
                          }}
                        >
                        <Blog></Blog>

                        <Switch>
                          <Redirect exact from ="/" to="/posts"></Redirect>
                          <Route exact path="/person"  component={Person}></Route>
                          <Route exact path="/cockpit"  component={Cockpit}></Route>
                          <Route exact path="/counter"  component={Counter}></Route>
                          <Route exact path="/Form"  component={Form}></Route>
                          <Route exact path="/bootstrapexample"  component={B4example}></Route>
                          <Route exact path="/ingredients"  component={Ingredients}></Route>
                          <Route exact path="/counterfunc"  component={Counterfunc}></Route>
                          <Route exact path="/arrayopeartion"  component={Arrayoperation}></Route>
                          <Route exact path="/reacttesting"  component={ReactTesting}></Route>
                          <Route exact path="/posts"  component={Posts}></Route>
                          <Route exact path="/posts/:id"  component={Fullpost}></Route>
                          <Route exact path="/defaultprops/:id"  component={Defaultprops}></Route>
                          <Route exact path="/nestedarray"  component={NestedArray}></Route>
                          <Route exact path="/functioncontext"  component={FunctionContext}></Route>
                          {this.state.authenticated?<Route exact path="/newpost" render={()=>
                              <Suspense  {...this.props} fallback={<div>loading</div>}>
                               <Newpostcomponent />
                         </Suspense>}></Route>:null}
                          <Route  path="*" render={()=><h1>Route not found</h1>} ></Route>
                        </Switch>  
                       
                    </AuthContext.Provider>
              </div>
          </BrowserRouter>

        );

    }
    
}

export default App;
