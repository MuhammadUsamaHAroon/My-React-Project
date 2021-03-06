import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudentSignup from '../TaskNumberOne/screens/signUpScreens/studentSignup'
import StudentDashBoard from "../TaskNumberOne/screens/signUpDashBoard/studentDashBoard";
import StudentLogin from "../TaskNumberOne/screens/loginScreens/studentLogin";

export default function ReactRouter() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        

          <Route path="/studentDash">
          <StudentDashBoard/>
          
           
          </Route>"/companySignup"
          <Route path="/studentLog">
          <StudentLogin/>
          
          
          </Route>
          <Route path="/">
          <StudentSignup/>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}