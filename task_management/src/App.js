import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home";
import Task from "./Components/pages/Task";
import details from "./Components/pages/Info";
import Info from "./Components/pages/Info";
import NavBar from "./Components/pages/Layout/NavBar";
//import AddTask from "./Components/pages/AddTask";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./Components/pages/AddTask";

function App() {
  return (

    <Router>
    <div className="App">
     
      <NavBar/>
      <h1> hello there</h1>
      <Switch>

        <Route exact path="/" component={Home}/>

        <Route exact path="/Task" component={Task}/>
        <Route exact path="/Info" component={Info}/>
        <Route exact path="/AddTask" component={AddTask}/>
      </Switch>
     
    </div>
    
    </Router> 
    
  );
}

export default App;
 