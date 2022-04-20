import React, {useState,useEffect}  from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
 
import Footer from './footer';
var ad={}
var pic="../../public/images/";
var hcolor="#6a3e3e";
function Userpart1info(props){
    const {fid} = useParams();	
    
    const headr={     
      width:"100%",
      height:"70px",
      backgroundColor:props.headercolor,
      borderBottom: "7px solid "+props.headerBottom,
      
    }
    hcolor=props.headercolor;
    console.log(hcolor)
    const headrp={
      fontSize:props.headerContent?(props.headerContent[3])+"px":"20px",
      color:props.headerContent?props.headerContent[2]:"black",
      fontFamily:props.headerContent?props.headerContent[1]:"serif",
      paddingTop:props.headerContent? ((10-(props.headerContent[3]/1.25))+"px"):"10px",
      // paddingBottom:"10px",
      // verticalAlign:"middle",
    }
    const imgstyle={
      width:"70px",
      height:"70px",
      borderRadius: "50%",
      verticalAlign:"middle",
      float:"left",
      padding:"7px"
       
    }
    const bod={
      backgroundColor:props.backgroundColor,
      fontSize:props.infContent?(props.infContent[3])+"px":"20px",
      color:props.infContent?props.infContent[2]:"black",
      fontFamily:props.infContent?props.infContent[1]:"serif",
      padding:"20px",
      backgroundSize: 'cover',
      opacity:"0.75",
      backgroundRepeat: 'no-repeat',
      minHeight:"490px",
      textAlign:"center",
      // backgroundImage:`url('${pic+props.backgroundPhoto}')`
    }
    ad=bod
    const dashboard={
      clear:"left",
      float:"left",
      fontSize:props.headerContent?(props.headerContent[3])+"px":"20px",
      color:props.headerContent?props.headerContent[2]:"black",
      fontFamily:props.headerContent?props.headerContent[1]:"serif",
      margin:"-5% 30% 0 40%",
      textDecoration:"none",
    }
     
    // bg=props.backgroundColor;
    //    bgp=pic+props.backgroundPhoto
    
    return(
      <div>
        <div style={headr}>
            <img src={pic+props.headerLogo} alt="logo" style={imgstyle}></img>
            <p style={headrp}>{props.headerContent?props.headerContent[0]:"null"}</p>
            <Link to={"/dashboard/"+fid} style={dashboard}  >Home</Link>
        </div>
                           
      </div>
    )
  }
function Userpart2info(props){
    const imagestyle={
        width:"600px",
        height:"400px",
        float:"right"

    }
     return(
         <div>
         <div style={ad}>
         <img src={pic+props.profile} alt="logo" style={imagestyle}></img>
         {props.eveinformation?props.eveinformation[0]:"eve info"}
         
             </div> 
            </div>
     )
}
function View1(){
    const [info, setInfo] = useState([]);	
  const { fid} = useParams();	
		useEffect(()=>{
			axios.get('/main/info1/fid/'+fid)
			.then(response => { 
					if(response.data)
							setInfo(response.data); 
					} )
		},[])
  return(<div  >{ Userpart1info(info)}</div>)
}
function View2(){
    const [info, setInfo] = useState([]);	
    const {cid} = useParams();
    useEffect(()=>{
        axios.get('/sub/info1/fid/'+cid)
        .then(response => { 
                if(response.data)
                        setInfo(response.data); 
                } )
    },[])
    return(<div>{ Userpart2info(info)}</div>)
}
function Eventview(){
     
    return(
        <div>
            <View1/>
            <View2/>
            <Footer ftColor={hcolor}/>
        </div>
    );
}
export default Eventview;