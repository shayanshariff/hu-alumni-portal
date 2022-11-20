import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './login';
import Landing from './landing';
import Fpasswd from "./fpasswd";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-pwd" element={<Fpasswd />}/>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
