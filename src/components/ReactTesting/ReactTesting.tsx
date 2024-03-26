import React,{useState,useEffect, useCallback,useContext} from 'react'
import axios from 'axios';

const ReactTesting=(props:any) =>{
  const [city, setCity] = useState('');
  const [greetingdata, setGreetingdata] = useState('');

  const fetchGreeting = async  (url:any) =>{
    try{
        await axios
            .get(url)
            .then(response => {
              const {data} = response
              setGreetingdata(data.data);
            })
    }
    catch(e){
      console.log(e);
    }
  }


    return (
        <React.Fragment>
            <div style={{textAlign:"center"}}>
              <h1 title="Header1" className="header">sampledata</h1>
              <h2 title="Header" className="header">{props.title}</h2>
              <div>
                <button role="spinbutton" >
                    Volume
                </button>
              </div>
              <div>
                <label>Username <input  placeholder="Username"/></label>
              </div>
              <div>
                 <p data-testid="custom-element" >my custom paragraph test</p>
              </div>
              <div>
                 <input type="text" data-testid="city-test" onChange={(event) => setCity(event.target.value)} />
              </div>
              <div>
                 <p data-testid="city-text">selected city is {city}</p>
              </div>
              <div>
                 <button data-testid="city-textbutton" onClick={()=>setCity('bangalore')}>set city through button click</button>
              </div>
              <div>
                 <button  data-testid="greeting-button" onClick={() => fetchGreeting('/greeting')} >
                      getGreeting
                  </button>
              </div>
              <div>
                   <p>The greeting data received from api is {greetingdata}</p>
              </div>
            </div>
        </React.Fragment>
    )
}

export default ReactTesting;