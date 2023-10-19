import React, { Component } from 'react';
import  './B4example.css';


class B4example extends Component<{},{}> {
  
    constructor(props:any)
    {
       super(props);
       
    }

    state={
        rating:true
    }

    getRating=(rating:any)=>{

        const starTotal = 5;
        const starPercentage = (rating / starTotal) * 100;
        const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
        return {"width":starPercentageRounded};

    }

    getRatings=(rating:any)=>{

        const starTotal = 5;
        const starPercentage = (rating / starTotal) * 100;
        const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
        return starPercentageRounded;

    }

    componentDidMount(){ 
  
       // $('.carousel').cor();
       
    }

    render() {

        return(
               <div style={{textAlign:"center"}}>

                    <div className="jumbotron text-center">
                        <h1>My First Bootstrap Page</h1>
                        <p>Resize this responsive page to see the effect!</p> 
                        <img src={this.state.rating?"https://tineye.com/images/widgets/mona.jpg":""} alt="Los Angeles" width="250" height="100" />
                    </div>

                    <div className="stars-outer">
                       {this.state.rating?<div className="stars-inner"  style={this.getRating(4)}></div>
                       :<div className="stars-inner"  style={this.getRating(2)}></div>}
                    </div><br></br>
                    <div className="stars-outer">
                      <div className="stars-inner"  style={this.state.rating?this.getRating(4):this.getRating(2)}></div>
                    </div><br></br>
                    <div className="stars-outer">
                      <div className="stars-inner"  style={{width:this.state.rating?this.getRatings(4):this.getRatings(2)}}></div>
                    </div>

                    <div id="demo" className="carousel slide" data-ride="carousel">
                       
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                   
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://tineye.com/images/widgets/mona.jpg" alt="Los Angeles" width="1200" height="500" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://tineye.com/images/widgets/mona.jpg" alt="Chicago" width="1200" height="500" />
                            </div>
                            <div className="carousel-item">
                            <img src="https://tineye.com/images/widgets/mona.jpg" alt="New York" width="1200" height="500" />
                            </div>
                        </div>

               
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                        </div>

                </div>
            );
        }

}

export default B4example;