import React,{useEffect,useState,useRef, useContext} from 'react'; 
const FunContext=React.createContext<any>({onlinevalue:false,setOnlineValue:()=>{},setMyvalue:()=>{}});

const FunctionContext=(props:any)=> { 
     const [online,setOnline]=useState(false);
     const [mytestvalue,setmytestValue]=useState('suresh');

    return(

         <div>
              <p>Name in FunctionContext mycomponent: {mytestvalue}</p>
           <FunContext.Provider value={{onlinevalue:online,setOnlineValue:setOnline,setMyvalue:setmytestValue,mytestvalue:mytestvalue}}>
              <Layout></Layout>
           </FunContext.Provider >   
         </div>     
        
      );
};

const Layout=(props:any)=>{
     const contextreference=useContext(FunContext);
     return (<div><Header></Header></div>)
}

const Header=(props:any)=>{
    const contextreferenceheader=useContext(FunContext);
    const [myvalue,setMyvalue]=useState('mahesh');
    return (<div>
           <p>Name in Header mycomponent: {contextreferenceheader.onlinevalue?'pradeep':'satwik'}</p>
           <p>Name in Header mycomponent: {contextreferenceheader.mytestvalue}</p>
           <button onClick={()=>contextreferenceheader.setMyvalue('satwik')}>{contextreferenceheader.mytestvalue}</button>
           <button onClick={()=>contextreferenceheader.setOnlineValue(true)}>{contextreferenceheader.onlinevalue?'online':'offline'}</button>
            <Button></Button>
        </div>)
}

const Button=(props:any)=>{
    const contextreference=useContext(FunContext);
    return (<div><button onClick={()=>contextreference.setOnlineValue(true)}>{contextreference.onlinevalue?'online':'offline'}</button></div>)
}

export default FunctionContext;