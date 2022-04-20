import React, {useState,useEffect}  from 'react';
import '../styles_css/signup.css';
import '../styles_css/OuterPage.css';
import Navbar1 from './navbar1'
import SubNavbar from './subcomp/subnavbar';
import   '../styles_css/navbar.css';
import   '../styles_css/mainpage.css';
// import { Link, renderMatches } from 'react-router-dom';
 
// import { useEffect } from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
// import Navbar from  "./navbar";
// import logo from "../images/logo.jpg";
import logo from "../images/logo.jpg"
import {  useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import FormData from "form-data";
import  Footer from "./footer";
 

// import SubPage from "./subpage" ;
function Mainpage(){
    let navigate=useNavigate();
    const {stat,fid} = useParams();
     
     
     
       useEffect(()=>{
        if(fid!=="0"){
          
           axios.get('/main/info1/fid/'+fid)
          .then(response => { 
            setOuter({backgroundColor:response.data.backgroundColor?response.data.backgroundColor:"#ffffff",
              backgroundPhoto:"",
              headerBottom:response.data.headerBottom,
              headercolor:response.data.headercolor,
              hC0: response.data.headerContent?response.data.headerContent[0]:"",
              hC1: response.data.headerContent?response.data.headerContent[1]:"",
              hC2: response.data.headerContent?response.data.headerContent[2]:"#ffffff",
              hC3:response.data.headerContent?response.data.headerContent[3]: "",
              iF0: response.data.infContent?response.data.infContent[0]:"",
              iF1:response.data.infContent?response.data.infContent[1]:"",
              iF2: response.data.infContent?response.data.infContent[2]:"#ffffff",
              iF3:response.data.infContent?response.data.infContent[3]:"",
              headerLogo:  "",
              profilepic:""
             });
          } )
        }
          
        
      },[])
      
     
    const [outer, setOuter] = useState({
        backgroundColor: "#ffffff",
        backgroundPhoto:"",
        headerBottom:"#ffffff",
        headercolor: "#ffffff",
        hC0: "",
        hC1: "",
        hC2: "#ffffff",
        hC3: "",
        iF0: "",
        iF1: "",
        iF2: "#ffffff",
        iF3: "",
        headerLogo:"",
        profilepic:""
      });
     
      function handleChange(event) {
        const { name, value } = event.target;
    
        setOuter((prevNote) => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
      function handleChangeImage(event){  
        const name=event.target.name;
         
        setOuter((prevNote) => {  
            return {
              ...prevNote,
              [name]:event.target.files[0]
            };
          });
           
      }
      function handleChangeImages(event){
        
        const name=event.target.name;
          console.log(name,event.target.files)
        setOuter((prevNote) => {
            
             
            return {
              ...prevNote,
              [name]:event.target.files
            };
          });
      }
      async function submitOuter(event) {
        
        
          const userOuter=new FormData();
          for (const key of Object.keys(outer.profilepic)) {
            userOuter.append('profilepic', outer.profilepic[key])
          }
          // console.log(outer);
          userOuter.append("backgroundPhoto",outer.backgroundPhoto,outer.backgroundPhoto.name)
          userOuter.append("headerLogo",outer.headerLogo, outer.headerLogo.name)
          //userOuter.append("profilepic",outer.profilepic,outer.profilepic.name)
          userOuter.append("backgroundColor",outer.backgroundColor)
          userOuter.append("headerBottom", outer.headerBottom)
          userOuter.append("headercolor", outer.headercolor)
          userOuter.append("hC0",outer.hC0)
          userOuter.append("hC1",outer.hC1)
          userOuter.append("hC2",outer.hC2)
          userOuter.append("hC3",outer.hC3)
          userOuter.append("iF0",outer.iF0)
          userOuter.append("iF1",outer.iF1)
          userOuter.append("iF2",outer.iF2)
          userOuter.append("iF3",outer.iF3)
          console.log(userOuter) 
          if(stat==="create")
          {
          await axios.post('/main/add/uid/'+localStorage.getItem("username"), userOuter)
            .then(res => {
              //  navigate("/outer");
             }).catch("err")
         }
         if(stat==="update")
         {
            await axios.post('/main/find/fid/'+fid, userOuter)
            .then(res => {    
              // navigate("/outer");
            }).catch("err")
         }
            //  axios.post('http://localhost:5000/main/, userOuter)
            //  .then(res => {console.log(res.data)
            //   navigate("/Mainpage/SubPage")
            // navigate("/Mainpage/SubPage/"+res.data)
            //   });
          //window.location = '/';
          
        setOuter({
            backgroundColor:  "#ffffff",
            backgroundPhoto:"",
            headerBottom:"#ffffff",
            headercolor: "#ffffff",
            hC0:"",
            hC1: "",
            hC2: "#ffffff",
            hC3: "",
            iF0: "",
            iF1: "",
            iF2: "#ffffff",
            iF3: "",
            headerLogo: "",
            profilepic:""
        });
        event.preventDefault();
      }
    if(localStorage.getItem("username"))   
    return(
      // <BrowserRouter>
    <div >
        <Navbar1/>
          <div className='mainDiv'>
            <div className='subDiv1 subDiv' >  
              
               <div className="heading1">Style Background & Header</div>
               <form    onSubmit={submitOuter}>
                     <table> 
                     <tbody>
                     <tr>
                      <td ><p >Background Color  :</p></td>
                      <td >
                          <input
                            type="color"
                            name="backgroundColor"
                            onChange={handleChange}
                            value={outer.backgroundColor}
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
                        <td><p>Header Bottom Color  </p></td>
                        <td>
                        <input
                          type="color"
                          name="headerBottom"
                          onChange={handleChange}
                          value={outer.headerBottom}
                          placeholder="enter background photo"
                          rows="3"
                        />
                        </td>
                    </tr>
                      <tr>
                        <td><p>Header Color</p></td>
                        <td>
                          <input
                            type="color"
                            name="headercolor"
                            onChange={handleChange}
                            value={outer.headercolor}
                            placeholder="enter headercolor"
                            rows="3"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><p>Header Logo</p></td>
                         <td>
                          <input
                        
                          type="file"
                          name="headerLogo"
                          onChange={handleChangeImage}
                          
                          placeholder="upload headerLogo"
                          rows="3"
                          />
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
                        name="hC0"
                        onChange={handleChange}
                        value={ outer.hC0}
                        placeholder="enter headerContent"
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
                            name="hC2"
                            onChange={handleChange}
                            value={outer.hC2}
                            placeholder="enter headerContent color"
                            rows="3"
                          />
                          </td>
                          <td>
                          <input
                            type="number"
                            name="hC3"
                            onChange={handleChange}
                            value={outer.hC3}
                            placeholder="size"
                            rows="3"
                          />
                          </td>
                          </tr>
                          </tbody>
                          </table>
                           
                          <select name="hC1" onChange={handleChange} value={outer.hC1 || "cursive"}>
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
                     <h4>Style information:</h4> 
                    <table>
                    <tbody>
                    <tr>
                      <td>
                      {/* <p>Header conent</p> */}
                      <input
                        name="iF0"
                        onChange={handleChange}
                        value={outer.iF0}
                        placeholder="enter information Content"
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
                            name="iF2"
                            onChange={handleChange}
                            value={outer.iF2}
                            placeholder="enter headerContent color"
                            rows="3"
                          />
                          </td>
                          <td>
                          <input
                            type="number"
                            name="iF3"
                            onChange={handleChange}
                            value={outer.iF3}
                            placeholder="size"
                            rows="3"
                          />
                          </td>
                          </tr>
                          </tbody>
                          </table>
                           
                          <select name="iF1" onChange={handleChange} value={outer.iF1 || "cursive"}>
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
                     
                    <h5>Add max 4 photos</h5>
                    <input
                     type="file"
                      multiple
                      name="profilepic"
                      onChange={handleChangeImages} 
                      placeholder="upload img"
                      rows="3"
                    />
                   
                   
                      
                 <input type="submit" value="submit"></input> 
                  {/* <button   onClick={submitOuter}>Submit</button> */}
               
                  <p>IF current images are not appearing default image logo will appear</p>
              </form>
            </div>
            <div className='subDiv2 subDiv'>
              <div><h4>Preview of header,background</h4></div>
                <div className='subDiv21' style={{backgroundColor:outer.backgroundColor,marginBottom:"30px"}}>
                  <SubNavbar outer={outer}/>
                  <div className='subDiv22'>
                  <div style={{fontSize:outer.iF3+"px",color:outer.iF2,fontFamily:outer.iF1,textAlign:"center" }}>{outer.iF0}</div>
                  <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false" data-pause='hover' style={{ width:"100%",height:"300px",  marginLeft:"0%"}}>
            
                          <ol className="carousel-indicators">
                              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                              <li data-target="#myCarousel" data-slide-to="1"></li>
                              <li data-target="#myCarousel" data-slide-to="2"></li>
                              <li data-target="#myCarousel" data-slide-to="3"></li>
                          </ol>

                          
                          <div className="carousel-inner" >

                              <div className="item active" style={{ backgroundColor:'rgb(203, 183, 211)'}}>
                                  <img src={logo} alt="Los" style={{width:"100%",height:"300px"  }}/>
                                   
                              </div>

                              <div className="item" style={{  }}>
                                  <img src={logo} alt="Chic" style={{width:"100%" ,height:"300px" }}/>
                                  
                              </div>
                              
                              <div className="item" style={{  }}>
                                  <img src={logo} alt="New " style={{width:"100%",height:"300px"  }}/>
                                   
                              </div>
                              <div className="item" style={{  }}>
                                  <img src={logo} alt="New " style={{width:"100%",height:"300px"  }}/>
                                   
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
                  <Footer ftColor={outer.headercolor} />
                </div>
            </div>
            
          </div>
          <Footer ftColor='#6b5567' />
    </div>
    // </BrowserRouter>
    );
}
export default Mainpage;
