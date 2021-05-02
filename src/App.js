import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import About from './Components/About/About';
import ProjectMain from './Components/Projects/ProjectMain';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import ContactShared from './Components/Contact/ContactShared';

export  const NavContext = React.createContext();


function App() {

  const [navBar, setNavBar] = useState (null);

  return (
    <div className="App">
      <NavContext.Provider value={navBar}>
      <Router>
      
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>

            <Route path="/contact">
                <ContactShared></ContactShared>
            </Route>

            <Route path="/project's">
                <ProjectMain></ProjectMain>
            </Route>

            <Route exact path="/Resume">
             <Resume></Resume>
            </Route>

            <Route exact path="/">
             <Home></Home>
            </Route>
        </Switch>
    </Router>
    </NavContext.Provider>
      
    </div>
  );
}

export default App;
