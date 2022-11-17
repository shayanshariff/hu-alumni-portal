import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './login';
import Landing from './landing';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
