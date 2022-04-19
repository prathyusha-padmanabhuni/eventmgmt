import React  from 'react';
import { Link } from 'react-router-dom';
import   '../styles_css/navbar.css';
import logo from "../images/logo.jpg";
import {useNavigate} from 'react-router-dom';
function Navbar1 () {
    let navigate=useNavigate();
//<Link to="/user" className="nav-link">Create User</Link>
//<Link to="/user/info" className="nav-link">info User</Link>   
    return (
        <div className="Navbarcss"   >
        <img src={logo} alt="logo" width="70px" height="70px"  onClick={()=>navigate("/")}/> 
        <h2>Event Management</h2>
         
        <ul>
            <li><Link to="/outer" className="nav-link">MainPage</Link></li>
            <li><Link to="/logout" className="nav-link">logout</Link></li>
            
              
        </ul>
     </div>
       
    );
  
}
export default Navbar1;