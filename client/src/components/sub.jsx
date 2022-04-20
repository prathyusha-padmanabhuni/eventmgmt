import React, {useState,useEffect}  from 'react';
//import '../styles_css/OuterPage.css';
 
//import   '../styles_css/mainpage.css';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
 
import  Footer from "./footer";
import { Link,useParams  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faEdit, faEye,faTrash} from '@fortawesome/free-solid-svg-icons';
import Navbar1 from "./navbar1";
 
var bg=""
 
function DisplayMainInfo (){
    var pic="/public/images/";
    const { fid} = useParams();
    const [props, setInfo] = useState([]);
       
       useEffect(()=>{
    
       axios.get('/main/info1/fid/'+fid)
      .then(response => { 
          
          setInfo(response.data); })
      },[])
          if(!props)
          {
            return <div>loading!!!!</div>
          }
            const headr={
             
                  fontSize:props.headerContent?(props.headerContent[3])+"px":"20px",
                  color:props.headerContent?props.headerContent[2]:"black",
                  fontFamily:props.headerContent?props.headerContent[1]:"serif",
                   
                  width:"100%",
                  height:"70px",
                  backgroundColor:props.headercolor,
                  borderBottom: "7px solid "+props.headerBottom
              }
               
              const imgstyle={
                width:"70px",
                height:"70px",
                borderRadius: "50%",
                verticalAlign:"middle",
                padding:"12px",
                float:"left"
              }
              const bod={
                backgroundColor:props.backgroundColor,
                fontSize:props.infContent?(props.infContent[3])+"px":"20px",
                color:props.infContent?props.infContent[2]:"black",
                fontFamily:props.infContent?props.infContent[1]:"serif",
                //backgroundImage:"url('http://localhost:5000/public/images/1649606175347_IMG_4301%20(1).jpg')",
                backgroundSize: 'cover',
                opacity:"0.75",
                backgroundRepeat: 'no-repeat',
                minHeight:"450px",
                textAlign:"center",
                // backgroundImage:`url('${pic+props.backgroundPhoto}')`
              }
               var arr=[];
               bg=props.backgroundColor;
            //    bgp=pic+props.backgroundPhoto
               if(props.profile)
               {
                arr=props.profile.split(',');
               
               }

              return(
             
              <div>
                    <div style={headr}>
                        <img src={pic+props.headerLogo} alt="logo" style={imgstyle}></img>
                        {/* <img src={logo} alt="logo" style={imgstyle}></img> */}
                        <p style={headr}>{props.headerContent?props.headerContent[0]:"null"}</p>
                    </div>
                    <div style={bod}>
                         <p >{props.infContent?props.infContent[0]:"null"}</p>
                         <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false" data-pause='hover' style={{ width:"75%",height:"400px",  marginLeft:"15%" }}>
            
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol>

                          
                          <div className="carousel-inner" >

                              <div className="item active" style={{ backgroundColor:'rgb(203, 183, 211)'}}>
                                  <img src={ pic+arr[0]} alt="Los" style={{width:"100%",height:"400px"  }}/>
                                   
                              </div>

                              <div className="item" style={{  }}>
                                  <img src={pic+arr[1]} alt="Chic" style={{width:"100%" ,height:"400px" }}/>
                                  
                              </div>
                              
                              <div className="item" style={{  }}>
                                  <img src={pic+arr[2]} alt="New " style={{width:"100%",height:"400px"  }}/>
                                   
                              </div>
                              <div className="item" style={{  }}>
                                  <img src={pic+arr[3] } alt="New " style={{width:"100%",height:"400px"  }}/>
                                   
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
                     
              </div>
              );
               
}
async function deleteevent(fid,id){
    await axios.delete('/sub/fid/'+fid+'/eve/'+id)
      .then(response => { 
          if(response.data==="deleted")
            alert("deleted,please refresh the page");
      } )
}
function Usersubinfo( props ) {
    var pic="/public/images/";
    var bgp=pic+props.backgroundPhoto
    var bg="white"
    const { fid} = useParams();
    const mcard={
         display:"inline-block",
        clear:"right",
        width:"300px",
        height:"420px",
        padding:"2%"
    }
     const card={
         
         backgroundColor:"grey",
         backgroundImage:`url('${bgp}')` ,
         backgroundSize: 'cover',
        //  opacity:"0.50",
        backgroundRepeat: 'no-repeat',
        minHeight:"300px",
        textAlign:"center"
        
     }
      
     const icon={
         
         float:"right",
        color:"black",
        paddingRight:"20px",
        display:"block",
        marginTop:"-22px"
         
      }
     const inf={
        // float:"left",
        textAlign:"center",
        backgroundColor:props.backgroundColor?props.backgroundColor:"grey",
        margin:"0",
        padding:"5px",
        fontSize:props.information?(props.information[3])+"px":"20px",
        color:props.information?props.information[2]:"black",
        fontFamily:props.information?props.information[1]:"serif",
        height:"50px"
     } 
     const information12={
        backgroundColor:props.backgroundColor?props.backgroundColor:"grey",
        //  color:"red", 
         width:"100px",
         height:"50px" ,
         
         margin:"0 0 0 35%",
         fontSize:props.information?(props.information[3]/1.5)+"px":"20px",
        color:props.information?props.information[2]:"black",
        fontFamily:props.information?props.information[1]:"serif",
         
     }
      
     const fotr={
         height:"30px",
        //  backgroundColor:"red"
     }
     const icon1={
         width:"50%",
         paddingTop:"5px",
         color:"black",
         backgroundColor:"green",
         paddingBottom:"5px",
     }
     const icon2={
        width:"50%",
        paddingTop:"5px",
        color:"black",
        backgroundColor:"red",
        paddingBottom:"5px",
    }
     
    return( 
        <div key={props._id}   style={mcard} >
            <p style={inf}>{props.information[0]?props.information[0]:"event"}</p>
            <Link to={"/Mainpage/SubPage/"+fid+"/cid/"+props._id} style={{ textDecoration:"none" }}  ><FontAwesomeIcon icon={ faEdit} style={icon} size="1x"/></Link>
            <div style={card} >
                <div style={information12} >{props.eveinformation[0]?props.eveinformation[0].split(" ")[0]:"date"}  :  {props.eveinformation[0]?props.eveinformation[0].split(" ")[1]:"2022"}</div>
                {/* <div style={information22} >{props.reginfo[0]?props.reginfo[0]:"register"}</div> */}
            </div>
            <div style={fotr}>
                <Link to={"/view/"+props._id} style={{ textDecoration:"none" }}  ><FontAwesomeIcon icon={ faEye} style={icon1} size="1x"/></Link>
                <Link to={"/Mainpage/Sub/"+fid} style={{ textDecoration:"none" }}  onClick={()=>{deleteevent(fid,props._id)}}><FontAwesomeIcon icon={ faTrash} style={icon2} size="1x"/></Link>
            </div>
            
        </div>
);
};

function DisplaySubInfo (){
     
    const { fid} = useParams();
    const [info, setInfo] = useState([]);
    useEffect(()=>{
    
        axios.get('/sub/info/cid/'+fid)
        .then(response => { 
          setInfo(response.data);
           
        } )
      },[])
      if(!info) {
        return (<div>loading</div>)
    }
  
     
    const addevent={
        textAlign:"center",
        width:"200px",
        height:"40px",
        marginLeft:"40%",
        padding:"1%",
        backgroundColor:"rgb(203, 183, 211)",
        color:"black"
    }
     
   
     
       
    // return ( info.map((infod) =>userinfo (infod))   )
       
    return (<div style={{backgroundColor:bg,minHeight:"600px"}} >
                <div  style={addevent}> <Link to={"/Mainpage/SubPage/"+fid+"/cid/0"} style={{textDecoration:"none", color:"black"}}>ADD EVENT</Link> </div>
                <br/>
                {info.map((infod) =>Usersubinfo(infod))}
            </div>)
     
   }
function Sub(){
     
    if(localStorage.getItem("username"))   
    return(
        <div>
            <Navbar1/>
            <h4 style={{textAlign:"center",fontFamily:"cursive"}}>preview and add  your events</h4>
            <DisplayMainInfo />
            <DisplaySubInfo  />
            <Footer ftColor='#6b5567' />
        </div>
    );
}
export default Sub;