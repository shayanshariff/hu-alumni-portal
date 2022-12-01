import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/login";
import Landing from "./pages/landing";
import ProfilePage from "./pages/profile";
import Fpasswd from "./pages/fpasswd";
import ProfileLanding from "./pages/profile-landing";
import logo from "./assets/images/habib.png";
import Forum from "./pages/forum";

function App() {
  return (
    <BrowserRouter>
      <nav
        class="navbar sticky-top navbar-expand-lg navbar-default p-2"
        style={{ backgroundColor: "#5c2568" }}
      >
        <a class="navbar-brand pr-1 m-1" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            class="d-inline-block align-top p-1  "
            alt=""
          />
          HU Alumni Portal
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active z-2">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/forum"} className="nav-link">
                Forum
              </Link>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item p-2 my-2 my-lg-0 active">
            <Link to={"/profile-landing"} className="nav-link">
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pwd" element={<Fpasswd />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-landing" element={<ProfileLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
