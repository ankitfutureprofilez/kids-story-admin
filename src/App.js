import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/Bootstrap.css";
import './App.css';
import Homepage from "./pages/home/Homepage";
import Storylist from "./pages/story/Storylist";
import Storycard from "./pages/story/Storycard";
import Profile from "./pages/profile/Profile";
import Subscription from "./pages/profile/Subscription";
import Schedule from "./pages/story/Schedule";
import Static from "./pages/story/Static";
import PrivateRouter from "./component/PrivateRouter";
import { useSelector } from 'react-redux';
import { login, selectuser } from './redux/UserSlice';
import Login from "./component/Login";

function App() {
  const user = useSelector(login);

  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_URL;
  console.log("Base", IMAGE_BASE_URL);
  return (
    <div id="body-pd" className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/card" element={<Storycard />} />
          <Route path="/list" element={<Storylist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/static" element={<Static />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
