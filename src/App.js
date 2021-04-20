import React, { createContext, useState } from "react";
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import LogIn from './Components/LogIn/LogIn';

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Booking from "./Components/Booking/Booking/Booking";
import Admin from "./Components/Admin/Admin/Admin";
import AddService from "./Components/Admin/AddService/AddService";
import Review from "./Components/Booking/Review/Review";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className = "appContainer">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
                <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/review">
                <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/booking">
                <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
