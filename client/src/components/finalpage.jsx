import React, {useState,useEffect}  from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
 
import "../styles_css/finalpage.css"
 
var bg="";
 
window.onbeforeunload = () => {
  localStorage.removeItem('client');
}
function Inpdata(props,fid){
  
  
  //  console.log(props.reglink[4])
  //  const { fid} = useParams();	
  // let navigate=useNavigate();
  //  if(props.reglink[4]==="no")
  //  {
  //     navigate("/eventview/"+fid+props._id);
  //  }
  //  else{
      var enteredName="";
      if(localStorage.getItem("client"))
      {
        console.log(localStorage.getItem("client"))
      }
      else{
        enteredName = prompt('Please enter your gmail')
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        while(!enteredName.match(validRegex)) 
            enteredName = prompt('Please enter again your gmail')
        localStorage.setItem("client",enteredName);
         
          
      }
      
      const data={
          id:props._id,
          mail:localStorage.getItem("client")
      }
      
      if(props.reginfo.includes(localStorage.getItem("client"))  )
      {
        alert('already registered')
      }
      else{
      axios.post('http://localhost:5000/sub/addmail',data)
                .then(res => {console.log(res.data)})
      }
      // console.log(localStorage.getItem("client"))
  //  }
}
function Userpart1info(props){
  const {fid} = useParams();	
  var pic="../images/";
  const headr={     
    width:"100%",
    height:"70px",
    backgroundColor:props.headercolor,
    borderBottom: "7px solid "+props.headerBottom,
    
  }
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
    minHeight:"450px",
    textAlign:"center",
    // backgroundImage:`url('${pic+props.backgroundPhoto}')`
  }
  const dashboard={
    clear:"left",
    float:"left",
    fontSize:props.headerContent?(props.headerContent[3])+"px":"20px",
    color:props.headerContent?props.headerContent[2]:"black",
    fontFamily:props.headerContent?props.headerContent[1]:"serif",
    margin:"-5% 30% 0 40%",
    textDecoration:"none",
  }
  var arr=[];
  bg=props.backgroundColor;
  //    bgp=pic+props.backgroundPhoto
  if(props.profile)
    arr=props.profile.split(',');
  return(
    <div>
      <div style={headr}>
          <img src={pic+props.headerLogo} alt="logo" style={imgstyle}></img>
          <p style={headrp}>{props.headerContent?props.headerContent[0]:"null"}</p>
          <Link to={"/dashboard/"+fid} style={dashboard}  >Dashboard</Link>
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
                <div className="item active"  >
                    <img src={ pic+arr[0]} alt="Los" style={{width:"100%",height:"400px"  }}/>      
                </div>
                <div className="item"  >
                    <img src={pic+arr[1]} alt="Chic" style={{width:"100%" ,height:"400px" }}/>                                  
                </div>                             
                <div className="item"  >
                    <img src={pic+arr[2]} alt="New " style={{width:"100%",height:"400px"  }}/>                                 
                </div>
                <div className="item"  >
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
  )
}
function Userpart2info(props){
  let navigate=useNavigate();
  const [reg, setReg] = useState(props.prop.reglink[0]);	 
  const {fid} = useParams();
  var pic="../images/";
  var bgp=pic+props.prop.backgroundPhoto

  const mcard={
       display:"inline-block",
      clear:"right",
      width:"300px",
      height:"420px",
      padding:"2% 2% 2% 2%",
      marginBottom:"5%"

  }
   const card1={
       
       backgroundColor:props.prop.backgroundColor,
       backgroundImage:`url('${bgp}')` ,
       backgroundSize: 'cover',
      //  opacity:"0.50",
      backgroundRepeat: 'no-repeat',
      height:"300px",
      
   }
   const card2={
       
    backgroundColor:props.prop.backgroundColor,
    backgroundImage:`url('${bgp}')` ,
    backgroundSize: 'cover',
   //  opacity:"0.50",
   backgroundRepeat: 'no-repeat',
   height:"300px",
   cursor:"pointer"
   
}
    
    
   const inf={
      textAlign:"center",
      backgroundColor:props.prop.backgroundColor?props.prop.backgroundColor:"grey",
      margin:"0",
       paddingTop:props.prop.information?((10-(props.prop.information[3]/3))+"px"):"20px",
       
      fontSize:props.prop.information?(props.prop.information[3])+"px":"20px",
      color:props.prop.information?props.prop.information[2]:"black",
      fontFamily:props.prop.information?props.prop.information[1]:"serif",
      height:"50px",
      verticalAlign:"center"
   } 
   const fotr={
       height:"60px",
       backgroundColor:props.prop.backgroundColor?props.prop.backgroundColor:"grey",
       textAlign:"center",
       fontSize:props.prop.information?(props.prop.information[3]/2)+"px":"20px",
      color:props.prop.information?props.prop.information[2]:"black",
      fontFamily:props.prop.information?props.prop.information[1]:"serif",
   }
    
  const ereg={
    fontSize:props.prop.reglink?props.prop.reglink[0]+"px":"20px",
    color: "black",
    fontFamily:props.prop.reglink?props.prop.reglink[1]:"serif",
    textAlign:"center",
    backgroundColor:props.prop.reglink?props.prop.reglink[2]:"green",
    padding:"2px",
    margin:"0px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height:"30px",
    width:"250px" ,
    
   }
    // var reg="register";
  
  
  //  if(props.prop.reginfo.includes(localStorage.getItem("client"))  )
  //       setReg("registered")
      //  reg="registered"
   
  function changereg(){
    setReg(props.prop.reglink[0]+"ed")
  }
  //  console.log(reg)
  const [card,  setCursor] = useState(card1);
  return( 
       
          
          <div key={props.prop._id}   style={mcard}  > 
                
              <p style={inf}>{props.prop.information[0]?props.prop.information[0]:"event"}</p>
              <div style={card} onMouseEnter={() => setCursor(card2)}  onMouseLeave={() => setCursor(card1)} ><img src={bgp} alt="pic" style={{height:"300px",width:"250px"}}  onClick={()=>navigate("/eventview/"+fid+"/"+props.prop._id) } ></img></div>
              <div style={fotr}>
                  <div style={{textAlign:"left",paddingLeft:"5px",height:"30px",paddingTop:"5px"}}>{props.prop.eveinformation[0]?props.prop.eveinformation[0].split(" ")[0]:"date"}  :  {props.prop.eveinformation[0]?props.prop.eveinformation[0].split(" ")[1]:"2022"}</div>
                  {/* <div style={ereg}><button   style={{color:"black",backgroundColor:props.reglink[2]}}  >{props.reginfo[3]?props.reginfo[3]:"register"}</button></div> */}
                  {/* <div style={ereg} onClick={()=>Inpdata(props)}>{props.reglink[0]?props.reglink[0]:"register"}</div> */}

                  <div style={ereg} onClick={()=> 
                    {
                    if(props.prop.reglink[4]!=="no")
                    {
                      Inpdata(props.prop,fid);changereg()
                    }
                    else
                      navigate("/eventview/"+fid+"/"+props.prop._id);
                  }}>
                  {   
                    reg
                  }</div>
              </div>
              
          </div>
         
  );
}
function DisplayPart1(){
	const [info, setInfo] = useState([]);	
  const { fid} = useParams();	
		useEffect(()=>{
			axios.get('http://localhost:5000/main/info1/fid/'+fid)
			.then(response => { 
					if(response.data)
							setInfo(response.data); 
					} )
		},[])
  return(<div  >{ Userpart1info(info)}</div>)
}
function DisplayPart2(){
	const [info, setInfo] = useState([]);	
  
  const { fid} = useParams();	
		useEffect(()=>{
			axios.get('http://localhost:5000/sub/info/cid/'+fid)
			.then(response => { 
					if(response.data)  
							setInfo(response.data); 
					} )
          if(!info) {
            return (<div>loading</div>)}
		},[])
	//  return (<div style={{ backgroundColor:bg,minHeight:"600px" }}>{info.map((infod) =>Userpart2info(infod))}</div>)
  return (<div style={{ backgroundColor:bg,minHeight:"600px" }}>{info.map((infod) =><Userpart2info key={infod._id} prop={infod}/>)}</div>)
}
function Final(){
   
  
    return(
      <div>
			  <DisplayPart1/> 
        <DisplayPart2/> 
        {/* <Footer ftColor={bg}/>  */}
      </div>
    );
}
export default Final;
