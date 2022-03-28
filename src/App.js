import React from "react";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./components/UI/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/leader/Dashboard";
import Members from "./pages/leader/Members";
import Reports from "./pages/leader/Reports";
import Settings from "./pages/leader/Settings";
import Resources from "./pages/leader/Resources";
import Attendance from "./pages/leader/Attendance";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/reports" exact>
              <Reports />
            </Route>
            <Route path="/members" exact>
              <Members />
            </Route>
            <Route path="/attendance" exact>
              <Attendance />
            </Route>
            <Route path="/resources" exact>
              <Resources />
            </Route>
            <Route path="/settings" exact>
              <Settings />
            </Route>

            <Redirect to="/login" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
