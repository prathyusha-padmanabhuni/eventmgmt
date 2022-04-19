import React  from 'react';
 
// import   '../styles_css/footer.css';
function Footer (props) {
//<Link to="/user" className="nav-link">Create User</Link>
//<Link to="/user/info" className="nav-link">info User</Link>  
    const footer={
        backgroundColor:props.ftColor,
        minHeight:'50px',
        padding:"10px",
        textAlign:"center"
    }
    return (
         <div className="Footercss" style={footer}>
                  copyrights@2022
         </div>
       
    );
  
}
export default Footer;