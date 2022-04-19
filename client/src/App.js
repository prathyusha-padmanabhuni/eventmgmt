import  React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route,Routes } from "react-router-dom";
import {CreateUser,DisplayInfo} from "./components/createuser";
import {LoginUser} from "./components/userlogin";
import Sample from  "./components/sample";
import Navbar from  "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import Mainpage from "./components/mainpage";
import SubPage from "./components/subpage";
import Sub from "./components/sub";
import {Outerpage,DisplayMainInfo} from "./components/outerpage";
import LogOut from "./components/logout";
import Final from "./components/finalpage";
import View from "./components/finalview"
import "./App.css";

import Dashboard from "./components/dashbaord";
import Eventview from "./components/eventview";


function App() {
  return (
    < BrowserRouter> 
      <div >
          
          {/* <Navbar />                                                                                         */}
          <div className="appcss">
          <Routes > 
          <Route path="/" exact element={<HomePage/>} />
          {/* <Route path="/edit/:id" component={EditExercise} />

          <Route path="/create" component={CreateExercise} />  */}
          {/* <Route path="user" element={<CreateUser/>} /> */}
            
          <Route path="signUp" element={<CreateUser/>} />
          <Route path="login" element={<LoginUser/>}/>
          <Route path="user/info" exact element={<DisplayInfo/>} />
          <Route path="session" exact element={<Sample/>} />
          <Route path="Mainpage/:stat/:fid" exact element={<Mainpage/>} />
          <Route path="outer" exact element={<Outerpage/>} />
          <Route path="maininfo" exact element={<DisplayMainInfo/>} />
          <Route path="logout" exact element={<LogOut/>} />
          <Route path="Mainpage/SubPage/:fid/cid/:cid" exact element={<SubPage/>} />
          <Route path="Mainpage/Sub/:fid" exact element={<Sub/>} />
          <Route path=":eid/:fid" exact element={<Final/>} />
          {/* <Route path=":eid/:fid/:cid/view" exact element={<FinalView/>} /> */}
          <Route path="view/:cid" exact element={<View/>} />
          <Route path="dashboard/:fid" exact element={<Dashboard/>} />
          <Route path="eventview/:fid/:cid" exact element={<Eventview/>} />
          <Route path="*"  element={<NotFound/>} />
          </Routes>
          </div>
          
        
      </div>
    </ BrowserRouter>
   
  );
}
function NotFound() {
  const ntfound={
    margin:"40% 30% 0 40%",
  
  }
  return (<div style={ntfound}>You have landed on a page that doesn't exist</div>);
}
export default App;
