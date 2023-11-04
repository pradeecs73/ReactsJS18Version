import React, { Component } from 'react';

const asyncComponent=(importedComponent:any)=>{
     return class extends Component{
         state={
             
             component:null
         }

         
        
         componentDidMount()
         {
            importedComponent()
            .then((cmp:any) =>{
                this.setState({component:cmp.default});
            });
         }

         render(){
              
            const C:any=this.state.component;
            return C ? <C {...this.props} /> : null;

         }
         
     }

}

export default asyncComponent;