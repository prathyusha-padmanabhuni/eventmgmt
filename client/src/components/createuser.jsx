import React, {  useState} from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import '../styles_css/signup.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from  "./navbar";
import {ReactSession} from 'react-client-session';
import {useNavigate} from 'react-router-dom';
import spinner from "../images/spinner.gif";
import Footer from "./footer";
function userinfo( props ) {
  return(
    
      <tr key={props._id}>
        
       <td>{props.email}</td>
       <td>{props.password}</td>
       </tr>
  
  );
};

function DisplayInfo (){
  const [info, setInfo] = useState([]);
   
    // useEffect(()=>{
  
    axios.get('../../../users/info')
    .then(response => {
       
      setInfo(response.data); 
    } )
  // })
  // return ( info.map((infod) =>userinfo (infod))   )
  return (<table><tbody>{info.map((infod) =>userinfo(infod))}</tbody></table>)
}

function CreateUser () {
    let navigate=useNavigate();
    const [note, setNote] = useState({
        email:"",
        password:"",
        confirmPassword:""
      });
    const [loading,setLoading] = useState(true)
      function handleChange(event) {
        const { name, value } = event.target;
    
        setNote((prevNote) => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
      function submitNote(event) {
        
        const user = {  
            email:note.email,
            password:note.password,
            confirmPassword:note.confirmPassword
          }
          
          console.log(user);
          setLoading(false) 
          axios.post('/users/add', user)
            .then(res => {
            if(  res.data.length ===24)
            {
              ReactSession.set("username", res.data);
              localStorage.setItem("username", res.data);
              setLoading(true)
              navigate("/outer")
            }
            else
              alert(res.data)
              setLoading(true)
              navigate("/signUp")
            })
            .catch(err=>alert(err))
            
          //window.location = '/';
          
        setNote({
            email: "",
            password:"",
            confirmPassword:""
        });
        event.preventDefault();
      }
      if(!localStorage.getItem("username"))  
      return (
        <div>
        {!loading?(<img src={spinner} alt="...loading" width="100px" height="100px" style={{margin:"5% 0 0 40%" }}  /> )
        :(<div>
        <Navbar />  
        <div className="Signup">
              
          <h1> one step ... to create your own website</h1>    
          <form >
            <div>
              <Link to="/signUp" className={ 'btn btnbackground'}  >signUp</Link>
              <Link to="/login" className={'btn'}  >login</Link>
            </div>
              <table>
              <tbody>
              <tr>
                <td className="icon"><FontAwesomeIcon icon={ faUser} size="2x"/></td>
                 
                <td className="inputfield">
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={note.email}
                  placeholder="enter email"
                  rows="3"
                />
                </td>
              </tr>
              <tr>
                <td className="icon"><FontAwesomeIcon icon={faLock} size="2x"/></td>
                <td className="inputfield">
                  <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={note.password}
                    placeholder="enter password"
                  />
                </td>
              </tr>
              <tr>
                <td className="icon"><FontAwesomeIcon icon={faLock} size="2x"/></td>
                <td className="inputfield">
                  <input
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={note.confirmPassword}
                    placeholder="enter password  again"
                  />
                </td>
              </tr>
              </tbody>
              </table>
              <button className="submit" onClick={submitNote}>Submit</button>
              
               
          </form>
        </div>
        {/* <Footer ftColor='#6b5567'/> */}
        </div>)
        }
        </div>
      );
      else{
        return(<div style={{margin:"0 0 0 40%",paddingTop:"10%"}}>Already logged in try to logout by clicking logout <li><Link to="/logout" className="nav-link">logout</Link></li></div>);
      }
}
export { CreateUser,DisplayInfo };