import { useNavigate } from "react-router-dom";
import  {useEffect}  from 'react';
function LogOut () {
    let navigate=useNavigate();
    
     useEffect(()=>{
         if(localStorage.getItem("username"))
            localStorage.setItem("username", "")
        navigate("/");
    },[])
     
        return ( null
        //     <div className="Navbarcss"  >
        //     <img src={logo} alt="logo" width="70px" height="70px"  /> 
        //     <h2>Event Management</h2>
             
        //     <ul>
        //         <li><Link to="/session" className="nav-link">Dashoard</Link></li>
        //         <li><Link to="/logout" className="nav-link">logout</Link></li>
                
                  
        //     </ul>
        //  </div>
           
        );
      
    }
    export default LogOut;