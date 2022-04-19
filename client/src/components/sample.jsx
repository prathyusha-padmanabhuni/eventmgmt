import {ReactSession} from 'react-client-session';
 
function Sample(){
    return(
        <div>
            <h1>{ReactSession.get("username")}</h1>
            <h1>local storage{localStorage.getItem("username")}</h1>
            {/* <img src='http://localhost:5000/public/images/1649169598067_WIN_20220226_12_12_12_Pro.jpg' alt="logo" width="100px" height="100px"></img> */}
        </div>
    )
}
export default Sample
