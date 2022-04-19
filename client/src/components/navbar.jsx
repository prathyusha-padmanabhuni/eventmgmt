import React  from 'react';
import { Link } from 'react-router-dom';
import   '../styles_css/navbar.css';
import logo from "../images/logo.jpg";
import {useNavigate} from 'react-router-dom';
function Navbar () {
    let navigate=useNavigate();
//<Link to="/user" className="nav-link">Create User</Link>
//<Link to="/user/info" className="nav-link">info User</Link>   
     
    return (
         <div className="Navbarcss"  >
            <img src={logo} alt="logo" width="70px" height="70px" onClick={()=>navigate("/")} /> 
            <h2>Event Management</h2>
             
            <ul>
                <li><Link to="/signUp" className="nav-link">signUp</Link></li>
                <li><Link to="/login" className="nav-link">login</Link></li>
                <li><Link to="/session" className="nav-link">session</Link></li>
                  
            </ul>
         </div>
       
    );
  
}
export default Navbar;