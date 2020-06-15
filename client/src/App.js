import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Intro from "./components/Intro";
import Navbar from "./components/NavBar";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import MyProfile from "./components/pages/MyProfile";
import CreatePost from "./components/pages/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/CreatePost">
          <CreatePost />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/MyProfile">
          <MyProfile />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
