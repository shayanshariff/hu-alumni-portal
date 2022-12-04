import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfilePageEdit from "./pages/edit-profile";
import Login from "./pages/login";
import Landing from "./pages/landing";
import ProfilePage from "./pages/profile";
import Fpasswd from "./pages/fpasswd";
import Home from "./pages/home";
import logo from "./assets/images/habib.png";
import Forum from "./pages/forum";


function App() {
  return (
    <BrowserRouter>
      <nav
        class="navbar sticky-top navbar-expand-lg  p-2"
        style={{ backgroundColor: "#5c2568" }}
      >
        <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
".navbar {height: 50px; max-height: 50px;"}}
      />
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
          <ul class="navbar-nav mr-auto">
            <li class="nav-item z-2">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item z-2">
              <Link to={"/forum"} className="nav-link">
                Forum
              </Link>
            </li>
          <li class="nav-item z-2">
            <Link to={"/profile"} className="nav-link">
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
        <Route path="/home" element={<Home />} />
        <Route path="/edit-profile" element={<ProfilePageEdit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
