import React, {useState}  from 'react';
import '../styles_css/signup.css';
import '../styles_css/subpage.css';
import Navbar1 from './navbar1'
import logo from "../images/logo.jpg";
import   '../styles_css/navbar.css';
import { useParams } from 'react-router-dom';
 
import { useEffect } from 'react';
import axios from 'axios';
 
 
import {useNavigate} from 'react-router-dom';
import FormData from "form-data";
import  Footer from "./footer";
 
function SubPage(){
  let navigate=useNavigate();
    const {fid,cid} = useParams();
     
    const [sub, setSub] = useState({
        backgroundColor: "#ffffff",
        backgroundPhoto: "",
        inf0: "",
        inf1: "",
        inf2: "#ffffff",
        inf3: "",
        rl0 : "",
        rl1 : "",
        rl2 : "#ffffff",
        rl3 : "",
        rl4 : "",
        einf0: "",
        einf1: "",
        einf2: "#ffffff",
        einf3: "",
       reginfo :  "",
        profile:""
      });

      useEffect(()=>{
        if(cid!=="0"){
          axios.get('http://localhost:5000/sub/info1/fid/'+cid)
          .then(response => { 
            setSub({backgroundColor:response.data.backgroundColor,
              backgroundPhoto:"",
              inf0: response.data.information[0],
              inf1: response.data.information[1],
              inf2: response.data.information[2],
              inf3:response.data.information[3],
              rl0 : response.data.reglink[0],
              rl1 : response.data.reglink[1],
              rl2 : response.data.reglink[2],
              rl3 : response.data.reglink[3],
              rl4 : response.data.reglink[4],
              einf0:response.data.eveinformation[0],
              einf1:response.data.eveinformation[1],
              einf2:response.data.eveinformation[2],
              einf3:response.data.eveinformation[3],
           reginfo :response.data.reginfo,
            profile:""
             });
          } )
        }
          
        
      },[])
      

      const ecard={
          backgroundColor:sub.backgroundColor,
           width:"200px",
          height:"326px",
          margin:"20% 0 0 18%",
           
          textAlign:"left",
          // lineHeight:"2",
      }
      
      const ecardinf={
        backgroundColor:sub.backgroundColor,
         width:"450px",
        height:"400px",
        margin:"2% 0 0 2%",
        display:"absolte"
      }
     // var pic="../images/"+sub.backgroundPhoto.name
      const eimage={
        width:"200px",
        height:"200px",
         
     }
     const eimage1={
      width:"150px",
      // height:"180px",
      // float:"right",
      paddingRight:"5px",
      paddingTop:"20px",
      // paddingLeft:"30px",
      display:"inline-block",
      float:"left",
      marginRight: "30px",
      
   }
   const ehead1={
    fontSize:sub.einf3+"px",
    color:sub.einf2,
    fontFamily:sub.einf1,
    // textAlign:"center",
    backgroundColor:sub.backgroundColor,
    padding:"10px",
    margin:"0px",
   lineHeight: "20px",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // textAlign: "left",
    whiteSpace: "initial",
    width:"max-content",
    
    // width:"25%",
    
   }
     const ehead={
          fontSize:sub.inf3+"px",
          color:sub.inf2,
          fontFamily:sub.inf1,
          textAlign:"center",
          backgroundColor:sub.backgroundColor,
          paddingTop:(10-sub.inf3)+"px",
          margin:"0px",
          overflow: "hidden",
          textOverflow: "ellipsis", 
          height:"50px"
     }
     const ereg={
      fontSize:sub.rl3+"px",
      color: "black",
      fontFamily:sub.rl1,
      textAlign:"center",
      backgroundColor:sub.rl2,
      paddingTop:(10-sub.rl3)+"px",
      margin:"0px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      height:"50px",
      width:"200px" 
     }
     
      function handleChange(event) {
        const { name, value } = event.target;
    
        setSub((prevNote) => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
      function handleChangeImage(event){
        const name=event.target.name;
        
        setSub((prevNote) => { 
            return {
              ...prevNote,
              [name]:event.target.files[0]
            };
          });
      }
      function submitOuter(event) {
        
         
          const userSub=new FormData();
          userSub.append("backgroundPhoto",sub.backgroundPhoto,sub.backgroundPhoto.name)
          userSub.append("profile",sub.profile,sub.profile.name)
          userSub.append("backgroundColor",sub.backgroundColor)
          userSub.append("inf0",sub.inf0)
          userSub.append("inf1",sub.inf1)
          userSub.append("inf2",sub.inf2)
          userSub.append("inf3",sub.inf3)
          userSub.append("rl0",sub.rl0)
          userSub.append("rl1",sub.rl1)
          userSub.append("rl2",sub.rl2)
          userSub.append("rl3",sub.rl3)
          userSub.append("rl4",sub.rl4)
          userSub.append("einf0",sub.einf0)
          userSub.append("einf1",sub.einf1)
          userSub.append("einf2",sub.einf2)
          userSub.append("einf3",sub.einf3)
          userSub.append("reginfo",sub.reginfo)
          
          if(cid==="0"){
          axios.post('http://localhost:5000/sub/add/'+fid, userSub)
            .then(res => {console.log(res.data)
              navigate("/Mainpage/Sub/"+fid);
             
             });
            }
          else{
            axios.post('http://localhost:5000/sub/find/fid/'+cid, userSub)
            .then(res => { navigate("/Mainpage/Sub/"+fid);
            });
            }
          
          
        setSub({
            backgroundColor: "#ffffff",
            backgroundPhoto: "",
            inf0: "",
            inf1: "",
            inf2: "#ffffff",
            inf3: "",
            rl0 : "",
            rl1 : "",
            rl2 : "#ffffff",
            rl3 : "",
            rl4 : "",
            einf0: "",
            einf1: "",
            einf2: "#ffffff",
            einf3: "",
           reginfo :  "",
            profile:""
        });
        event.preventDefault();
      }
      var pic="/../images/"+sub.backgroundPhoto.name;
      var pic1="/../images/"+sub.profile.name;
    if(localStorage.getItem("username"))   
    return(
    <div>
        <Navbar1/>
          <div className='maindiv'>
            <div className='subdiv1 subdiv' >  
              
              <div className="heading1" style={{paddingTop:"5px"}}>Style Background & Header</div>
              <form    onSubmit={submitOuter} style={{paddingTop:"10px"}}>
                    <table> 
                    <tbody>
                    <tr>
                     <td ><p >Background Color  :</p></td>
                     <td >
                         <input
                           type="color"
                           name="backgroundColor"
                           onChange={handleChange}
                           value={sub.backgroundColor}
                           placeholder="enter background color"
                           style={{float:"left"}}
                           rows="3"
                         />
                       </td>
                     </tr>
                     <tr>
                       <td><p>Background Photo</p></td>
                       <td>
                         <input
                           
                           type="file"
                           name="backgroundPhoto"
                           onChange={handleChangeImage}
                           
                           placeholder="upload background photo"
                           rows="3"
                         />
                       </td>
                    </tr>
                    <tr>
                      <td><p>Registration Link</p></td>
                      <td>
                          <div  >
                              <input type="radio" value="yes" name="rl4" checked={sub.rl4 === "yes"} style={{display:"inline"}} onChange={handleChange}/> Yes
                              <input type="radio" value="no" name="rl4" checked={sub.rl4 === "no"}  style={{display:"inline"}} onChange={handleChange}/> No
                          </div>
                      </td>
                    </tr>
                     </tbody>
                   </table>
                   <h4>Style header:</h4> 
                   <table>
                   <tbody>
                   <tr>
                     <td>
                     {/* <p>Header conent</p> */}
                     <input
                       name="inf0"
                       onChange={handleChange}
                       value={sub.inf0}
                       placeholder="enter inf Content"
                       rows="3"
                       style={{height:"40px"}}
                     />
                     </td>
                     <td>
                       <table>
                       <tbody>
                         <tr>
                         <td>
                         <input
                           type="color"
                           name="inf2"
                           onChange={handleChange}
                           value={sub.inf2}
                           placeholder="enter headerContent color"
                           rows="3"
                         />
                         </td>
                         <td>
                         <input
                           type="number"
                           name="inf3"
                           onChange={handleChange}
                           value={sub.inf3}
                           placeholder="size"
                           rows="3"
                         />
                         </td>
                         </tr>
                         </tbody>
                         </table>
                          
                         <select name="inf1" onChange={handleChange} value={sub.inf1 || "cursive"}>
                           <option value="cursive">cursive</option>
                           <option value="fantasy">fantasy</option>
                           <option value="monospace">monospace</option>
                           <option value="sans-serif">sans-serif</option>
                           <option value="serif">serif</option>
                           <option value="inherit">inherit</option>
                           <option value="initial">initial</option>
                           <option value="revert">revert</option>
                         </select>
                         
                          
                       
                     </td>
                     </tr>
                     </tbody>
                    </table>
                    <h4>Style  registrarion:</h4> 
                   <table>
                   <tbody>
                   <tr>
                     <td>
                     {/* <p>Header conent</p> */}
                     <input
                       name="rl0"
                       onChange={handleChange}
                       value={sub.rl0}
                       placeholder="enter reg Content"
                       rows="3"
                       style={{height:"40px"}}
                     />
                     </td>
                     <td>
                       <table>
                       <tbody>
                         <tr>
                         <td>
                         <input
                           type="color"
                           name="rl2"
                           onChange={handleChange}
                           value={sub.rl2}
                           placeholder="enter headerContent color"
                           rows="3"
                         />
                         </td>
                         <td>
                         <input
                           type="number"
                           name="rl3"
                           onChange={handleChange}
                           value={sub.rl3}
                           placeholder="size"
                           rows="3"
                         />
                         </td>
                         </tr>
                         </tbody>
                         </table>
                          
                         <select name="rl1" onChange={handleChange} value={sub.rl1 || "cursive"}>
                           <option value="cursive">cursive</option>
                           <option value="fantasy">fantasy</option>
                           <option value="monospace">monospace</option>
                           <option value="sans-serif">sans-serif</option>
                           <option value="serif">serif</option>
                           <option value="inherit">inherit</option>
                           <option value="initial">initial</option>
                           <option value="revert">revert</option>
                         </select>
                         
                          
                       
                     </td>
                     </tr>
                      </tbody>
                    </table>
                    <h4>Style event information:</h4> 
                   <table>
                   <tbody>
                   <tr>
                     <td>
                     {/* <p>Header conent</p> */}
                     <textarea
                        
                       name="einf0"
                       onChange={handleChange}
                       value={sub.einf0}
                       placeholder="enter event inf Content"
                       rows="3"
                       style={{height:"40px"}}
                     />
                     </td>
                     <td>
                       <table>
                       <tbody>
                         <tr>
                         <td>
                         <input
                           type="color"
                           name="einf2"
                           onChange={handleChange}
                           value={sub.einf2}
                           placeholder="enter event headerContent color"
                           rows="3"
                         />
                         </td>
                         <td>
                         <input
                           type="number"
                           name="einf3"
                           onChange={handleChange}
                           value={sub.einf3}
                           placeholder="size"
                           rows="3"
                         />
                         </td>
                         </tr>
                         </tbody>
                         </table>
                          
                         <select name="einf1" onChange={handleChange} value={sub.einf1 || "cursive"}>
                           <option value="cursive">cursive</option>
                           <option value="fantasy">fantasy</option>
                           <option value="monospace">monospace</option>
                           <option value="sans-serif">sans-serif</option>
                           <option value="serif">serif</option>
                           <option value="inherit">inherit</option>
                           <option value="initial">initial</option>
                           <option value="revert">revert</option>
                         </select>
                         
                          
                       
                     </td>
                     </tr>
                     </tbody>
                    </table>
                    <table> 
                    <tbody>
                     
                     <tr>
                       <td><p>event Photo</p></td>
                       <td>
                         <input
                           
                           type="file"
                           name="profile"
                           onChange={handleChangeImage}
                           
                           placeholder="upload event photo"
                           rows="3"
                         />
                       </td>
                    </tr>
                     </tbody>
                   </table>
                    
                     
                <input type="submit" value="submit"></input> 
                 {/* <button   onClick={submitOuter}>Submit</button> */}
              
                <p>At event info u can place date 23/5/2010 or rating 5 place these things as first two words</p> 
                {/* <div>IF current images are not appearing default image logo will appear</div> */}
             </form>
            </div>
            <div className='subdiv2 subdiv'>
              <div><h4>Preview of  event card</h4></div>
                <div className='subdiv21' style={{backgroundColor:"white",marginBottom:"30px"}}>
                   <div style={ecard}>
                        <p style={ehead}>{sub.inf0}</p>
                          <img src={pic?pic:logo} alt="pic" style={eimage}/> 
                          <p style={{fontSize:(sub.inf3/2)+"px",backgroundColor:sub.backgroundColor,textAlign:"left",height:"15px"}}>{sub.einf0.split(" ")[0]} {sub.einf0.split(" ")[1]}</p>
                          
                          <p style={ereg}>{sub.rl0}</p>
                   </div>  
                </div>
            </div>
            <div className='subdiv3 subdiv'>
              <div><h4>Preview of event details</h4></div>
                <div className='subdiv31' style={{backgroundColor:"white",marginBottom:"30px"}}>
                    <div style={ecardinf}>
                            <img src={pic1?pic1:logo} alt="pic" style={eimage1}/> 
                             
                              <p style={ehead1}>{sub.einf0}</p>

                              {/* <p style={ereg1}>{sub.rl0}</p> */}
                    </div>    
                </div>
            </div>
          </div>
          <Footer ftColor='#6b5567' />
    </div>);
}
export default SubPage;
