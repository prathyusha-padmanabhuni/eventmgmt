import React, {  useState} from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import '../styles_css/signup.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import {ReactSession} from 'react-client-session';
import {useNavigate} from 'react-router-dom';
import Navbar from  "./navbar";
import spinner from "../images/spinner.gif";
import Footer from "./footer";
ReactSession.get("username");
function LoginUser () {
    const [note, setNote] = useState({
        email: "",
        password:""
      });
      const [loading,setLoading] = useState(true)
      let navigate=useNavigate();
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
            uemail:note.email,
            upassword:note.password
          }
          setLoading(false) 
          axios.post('/users/checkuser', user)
            // .then(res => console.log(res.data+"11111111111111")); 
            .then(res => {
              if( res.data.length ===24){
                ReactSession.set("username", res.data);
                localStorage.setItem("username", res.data)
                // <Navigate to='/signUp' />
                setLoading(true)
                navigate("/outer")
                console.log("logged in")
              }
              else{
                // alert("please enter correct detals or signup")
                alert(res.data)
                setLoading(true)
                navigate("/signUp")
              }
            }); 
        setNote({
            email: "",
            password:""
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
          <h1> one login ... to create your own website</h1>    
          <form >
            <div  >
            <Link to="/signUp" className={ 'btn'}  >signUp</Link>
            <Link to="/login" className={'btn btnbackground'}  >login</Link>
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
              </tbody>
              </table>
              <button className="submit" onClick={submitNote}>Submit</button>
              
               
          </form>
        </div>
        
        </div>
        
        )}
        {/* <Footer ftColor='#6b5567'/> */}
        </div>
      );
      else{
        return(<div style={{margin:"0 0 0 40%",paddingTop:"10%"}}>Already logged in try to logout by clicking logout <li><Link to="/logout" className="nav-link">logout</Link></li></div>);
      }
}
export {  LoginUser };