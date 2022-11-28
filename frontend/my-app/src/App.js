import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './login';
import Landing from './landing';
import ProfilePage from "./profile";
import Fpasswd from "./fpasswd";
import ProfileLanding from "./profile-landing";



function App() {
  return (

      <BrowserRouter>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2" >
  <a class="navbar-brand" href="#">
    <img src="habib.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
    HU Alumni Portal
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-pwd" element={<Fpasswd />}/>
          <Route path = "/profile" element = {<ProfilePage />}/>
          <Route path = "/profile-landing" element = {<ProfileLanding />}/>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
