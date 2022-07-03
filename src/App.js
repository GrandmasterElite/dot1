import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Adminlogin from "./pages/AdminLogin";
import Userlogin from "./pages/Userlogin";


import { Route, Link, HashRouter as Router, Routes, BrowserRouter,Switch} from 'react-router-dom'  

import Navbar from "./components/Navbar";
import Sidebar from "./component/Sidebar";
function App() {
  return (
    
    <>
    <h1>hello</h1>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/login/" component={Adminlogin} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/Ulogin/" component={Userlogin} />
        <Route exact path="/Sidebar/" component={Sidebar} />
        <Route component={Error} />        
      </Switch>
      </>
 );
}
export default App;
