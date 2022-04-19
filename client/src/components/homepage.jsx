import React, {useState}  from 'react';
import '../styles_css/signup.css';
import logo from "../images/logo.jpg";
import   '../styles_css/navbar.css';
import { Link  } from 'react-router-dom';
 
 


function HomePage(){
     
    const [colour, setColour] = useState("#fafafa");
    const [colour1, setColour1] = useState("#fafafa");
        const slide1={
            fontSize:"30px",
            color:'#642b60',
            marginTop:"-250px",
            marginBottom:"50px",
            
        }

        const link={
                textDecoration:'None',
                color:colour,
                textAlign:"center", 
        }
        const link1={
            textDecoration:'None',
            color:colour1,
            textAlign:"center",  
            borderRadius:"50%"  
    }
        const plink={
            width:'85px',
            height:'40px',
            paddingTop:"10px",
            backgroundColor:"#cc5fc5",
            display:"inline-block",
            marginLeft:"15px",
            boxShadow:" 5px 5px 3px 2px rgb(149, 145, 150)" 
        }

    return (<div >
        <div className="Navbarcss"  >
            <img src={logo} alt="logo" width="70px" height="70px"  /> 
            <h2>Event Management</h2>
            <ul>
                <li><a href="#aboutUs" className="nav-link">aboutUs</a></li>
                <li><Link to="/signUp" className="nav-link">signUp</Link></li>
                <li><Link to="/logout" className="nav-link">logout</Link></li>
            </ul>
         </div>
        <div className="container" >
        <h2 className="heading" style={{textAlign:"center"}}> Hello Geeks!!!</h2>
        {/* <h5> generate ur web page </h5> */}
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false" data-pause='hover' style={{ width:"75%",  marginLeft:"12%"}}>
            
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            
            <div className="carousel-inner" >

                <div className="item active" style={{ height:"400px",backgroundColor:'rgb(203, 183, 211)'}}>
                    {/* <img src={logo} alt="Los" style={{width:"100%",height:"400px" }}/> */}
                    <div className="carousel-caption" style={{marginTop:"-100px"}}>
                    <h3 style={slide1}>signup/login to create ur own website</h3>
                    <div style={{display:"inline" }}>
                        <p  style={plink}><Link style={link} onMouseEnter={() => setColour("black")}  onMouseLeave={() => setColour("white")} to="/signUp">signup</Link></p>
                        <p  style={plink}><Link style={link1} onMouseEnter={() => setColour1("black")}  onMouseLeave={() => setColour1("white")} to="/login">login</Link></p>
                    </div> 
                    <h6 style={{marginTop:"100px",color:"black"}}>slide to get some example websites by a single tap</h6>
                    </div>
                </div>

                <div className="item" style={{ height:"400px"}}>
                    <img src="http://localhost:5000/public/images/vanjangi.jpg" alt="Chic" style={{width:"100%" ,height:"400px"}} onClick={()=>window.open("http://localhost:3000/Nearby%20NRPM/625e2d091ca602da5b1fd490")}/>
                    <div className="carousel-caption">
                    {/* <h3>Chicago</h3>
                    <p>Thank you, Chicago!</p> */}
                    </div>
                </div>
                
                <div className="item" style={{ height:"400px"}}>
                    <img src="http://localhost:5000/public/images/cursor12.PNG" alt="New " style={{width:"100%",height:"400px" }}  onClick={()=>window.open("http://localhost:3000/CURSORS_2K22/625e08e51ca602da5b1fd349")}/>
                    <div className="carousel-caption">
                    {/* <h3>New York</h3>
                    <p>We love the Big Apple!</p> */}
                    </div>
                </div>
        
            </div>

            
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
        <div id="aboutUs" style={{marginTop:"50px"}} >
            <h1 style={{color:"black",fontSize:"30px",fontWeight:'bold'}}>About Us</h1>
            <h3 style={{paddingBottom:"50px",marginBottom:"-10px",textAlign:"left"}}>Our website main motto is to provide free services to coustomer so,they can create a customised website for their events that are conducted and can generate links where participants can get register through that link and participate</h3>
        </div>
    </div>)
}

export default HomePage;