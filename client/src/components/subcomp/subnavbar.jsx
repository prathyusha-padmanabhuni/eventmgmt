import React, {  useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import    '../../styles_css/substyles/subnavbar.css'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import {ReactSession} from 'react-client-session';
import {useNavigate} from 'react-router-dom';
import logo from "../../images/logo.jpg";
 
 
 
function SubNavbar (props) {
    //<Link to="/user" className="nav-link">Create User</Link>
    //<Link to="/user/info" className="nav-link">info User</Link>   
    
         const header={
            fontSize:props.outer.hC3+"px",
            color:props.outer.hC2,
            fontFamily:props.outer.hC1
         }
         const navbar={
             backgroundColor:props.outer.headercolor,
             borderBottom: "7px solid "+props.outer.headerBottom

         }
        
         var pic="../../images/"+props.outer.headerLogo.name
          
        return (
             <div className="Navbarcs" style={navbar} >
                <img src={logo} alt="logo" width="70px" height="70px"  /> 
                <h2 style={header}>{props.outer.hC0}</h2>
                 
                <ul>
                    <li><Link to="/signUp" className="nav-link">signUp</Link></li>
                    <li><Link to="/login" className="nav-link">login</Link></li>
                     
                      
                </ul>
             </div>
           
        );
      
    }
    export default SubNavbar;