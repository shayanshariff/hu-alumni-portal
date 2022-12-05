import { Link } from "react-router-dom"
import logo from "../assets/images/habib.png";
export default function Header() {
    return(
        <nav
        class="navbar sticky-top navbar-expand-lg  p-2"
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
    )
}