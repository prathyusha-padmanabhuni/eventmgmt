import React, {useState,useEffect}  from 'react';
import '../styles_css/signup.css';
import '../styles_css/OuterPage.css';
import Navbar1 from './navbar1'
import   '../styles_css/navbar.css';
// import { Link, renderMatches } from 'react-router-dom';
 
// import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faEdit } from '@fortawesome/free-solid-svg-icons';
// import Navbar from  "./navbar";
 
import {useNavigate,Link } from 'react-router-dom';
 
import Footer from "./footer";
// import SubPage from "./subpage" ;
var pic="../../public/images/";
function deleteevent(id){
    
    axios.delete('/main/del/uid/'+localStorage.getItem("username")+'/fid/'+id)
      .then(response => { 
          if(response.data==="deleted")
          window.location.reload(false);
      } )
}
function usermaininfo( props ) {
       
        const headr={
           
          fontSize:(props.headerContent[3]/2)+"px",
          color:props.headerContent[2],
          fontFamily:props.headerContent[1],
          paddingTop: "17px"
      }
      const navbr={
          backgroundColor:props.headercolor,
          borderBottom: "3px solid "+props.headerBottom

      }
      const bod={
        backgroundColor:props.backgroundColor,

        // backgroundImage:"url('http://localhost:5000/public/images/1649606175347_IMG_4301%20(1).jpg')",
        backgroundSize: 'cover',
        opacity:"0.75",
        backgroundRepeat: 'no-repeat',
       backgroundImage:`url('${pic+props.backgroundPhoto}')`
      } 
      
      const imgstyle={
        width:"60px",
        height:"65px",
        borderRadius: "50%",
        verticalAlign:"middle",
        padding:"8px",
        float:"left"
      }
      const icon={
        clear:"left",
        float:"right",

        paddingRight:"20px",
        display:"block",
        marginTop:"-50px"
      }
      function copyText(entryText){
        navigator.clipboard.writeText(entryText);
        alert("link copied")
      }
  
    return( 
        <div key={props._id} className="mcard">
          <div className="header" style={navbr}> 
              <img src={pic+props.headerLogo} alt="logo" style={imgstyle}></img>
              <p style={headr}>{props.headerContent[0]}</p>
              <Link to={"/Mainpage/update/"+props._id}style={{ textDecoration:"none" }}  ><FontAwesomeIcon icon={ faEdit} style={icon}/></Link>
              
          </div>
          <div className="body" style={bod}>
              <div className="preview"><Link to={"/"+props.headerContent[0]+"/"+props._id}   style={{ textDecoration:"none" }} >Preview</Link></div>
              {/* <div className="get"><Link to="/"  style={{ textDecoration:"none" }}>Get link</Link></div> */}
              <div className="get" onClick={() => copyText("https://eventrktm.herokuapp.com/"+props.headerContent[0]+"/"+props._id)}><Link to=""  style={{ textDecoration:"none" }}>Get link</Link></div>
          </div>
          <div className="footer">
              <div className="lin add"><Link to={"/Mainpage/Sub/"+props._id} className="link" >+ Event -</Link></div>
              <div className="lin delete"><Link to="/outer" className="link" onClick={()=>deleteevent(props._id)}>Delete</Link></div>
          </div>
          
         </div>
    
    );
  };
  
  function DisplayMainInfo (){
    const [info, setInfo] = useState([]);
     
       useEffect(()=>{
    
      axios.get('/main/info/uid/'+localStorage.getItem("username"))
      .then(response => { 
          if(response.data)
              setInfo(response.data); 
        
      } )
    },[])
    return (<div className="allmcard"  >{info.map((infod) =>usermaininfo(infod))}</div>)
     
   }
  function Outerpage(){
    let navigate=useNavigate();
    function submitMain(){
        navigate("/Mainpage/create/0")
  }
  function AddLink(link){
   
  axios.get('/main/fid/'+link+'/uid/'+localStorage.getItem("username"))
      .then(response => { 
          if(response.data==="added")
          window.location.reload(false);
      } )
    
  }
  if(localStorage.getItem("username"))   
    return(
        
        <div>
          <Navbar1  />
          <div className="headPart">
              <h4 className="heading">create your new website</h4>
              <div className="card1" onClick={submitMain}>
                  <hr className="card11"/> 
                  <div className="card12"></div>
              </div>
              <h4 className="heading2">THEMES</h4>
              <div className="card2">
                <div className="card21 card3">
                    <h5>FEST</h5>
                    <button onClick={()=> window.location.href="https://eventrktm.herokuapp.com/CURSORS_2K22/625e08e51ca602da5b1fd349"} className='view button'>view</button><br></br>
                    <button onClick={()=>AddLink("625e08e51ca602da5b1fd349")} className='plus button'>+</button>
                </div>
                <div className="card22 card3">
                    <h5>BLOG</h5>
                    <button onClick={()=> window.location.href="https://eventrktm.herokuapp.com/MOBILES/625e1eff1ca602da5b1fd414"} className='view button'>view</button><br></br>
                    <button onClick={()=>AddLink("625e1eff1ca602da5b1fd414")} className='plus button'>+</button>
                </div>
                <div className="card23 card3">
                    <h5>REVIEWS</h5>
                    <button onClick={()=> window.location.href="https://eventrktm.herokuapp.com/REVIEWS/625e273c1ca602da5b1fd461"} className='view button'>view</button><br></br>
                    <button onClick={()=>AddLink("625e273c1ca602da5b1fd461")} className='plus button'>+</button>
                </div>
                <div className="card23 card3">
                    <h5>PLACES</h5>
                    <button onClick={()=> window.location.href="https://eventrktm.herokuapp.com/Nearby%20NRPM/625e2d091ca602da5b1fd490"} className='view button'>view</button><br></br>
                    <button onClick={()=>AddLink("625e2d091ca602da5b1fd490")} className='plus button'>+</button>
                </div>
                <div className="card23 card3">
                    <h5>RESTUARANTS</h5>
                    <button onClick={()=> window.location.href="https://eventrktm.herokuapp.com/RESTUARANTS/625e307c1ca602da5b1fd4b6"} className='view button'>view</button><br></br>
                    <button onClick={()=>AddLink("625e307c1ca602da5b1fd4b6")} className='plus button'>+</button>
                </div>
                 
              </div>
          </div>
          <div style={{minHeight:"250px"}}>
          
           <DisplayMainInfo />
           </div>
          {/* <div  onClick={ DisplayInfo}  ></div> */}
          <Footer ftColor='#6b5567'/>
        </div>
    );
    else
      navigate("a/b/c/d")
}
export { Outerpage,DisplayMainInfo };