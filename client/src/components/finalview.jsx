import React, {useState,useEffect}  from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar1 from './navbar1';
import Footer from './footer';
import  "../styles_css/view.css";
function display(inf){
  return(
    <div style={subinfo}>{inf}</div>  
  )
}
const tableinfo1={
  margin:"5% 30% 0 35%",
  backgroundColor:"rgb(146, 75, 160)",
  bordercolor: "black",
  padding: "28px",
  border:" 1px solid black",
  
  textAlign:"center"
}
const tableinfo2={
  margin:"0 30% 0 35%",
  
  bordercolor: "black",
  // padding: "28px",
  // border:" 1px solid black",
  
  textAlign:"center"
}
const subinfo={
  // margin:"0 30% 0 40%",
  
  bordercolor: "black",
  padding: "5px",
  border:" 1px solid black",
  
  textAlign:"center"
}
 
// th, td {
// 	border: 1px solid black;
// 	padding: 8px;
// }

// thead th {
//   width: 25%;
// }
 
function View(){   
    const { cid} = useParams();
    const [info, setInfo] = useState([]);
    useEffect(()=>{
    
        axios.get('http://localhost:5000/sub/info1/fid/'+cid)
        .then(response => { 
          setInfo(Object.values(response.data.reginfo));
             
        } )
      },[]) 
      // var mails=Object.values(info.reginfo);
      // console.log(mails)
      // var arr=[]
      // console.log(info)
      // for(var i=1;i<info.reg.length;i++)
      //     arr.push(info.reginfo[i])

    return(
      <div>
		 <Navbar1/>
         <div className="mid"> <div style={tableinfo1} > REGISTERED </div>   
          <div  style={tableinfo2} >{ info.map(infod => display(infod))}</div>
         </div>
        
         <Footer ftColor='#6b5567' />
      </div>
    );
}
export default View;