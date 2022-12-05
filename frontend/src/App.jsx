import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ProfilePageEdit from "./pages/edit-profile";
import Login from "./pages/login";
import Landing from "./pages/landing";
import ProfilePage from "./pages/profile";
import Fpasswd from "./pages/fpasswd";
import Home from "./pages/home";
import Forum from "./pages/forum";
import { AuthProvider } from "./components/authContext";
import Header from "./components/header";
import useAuth from "./components/authContext";

// As the router is wrapped with the provider,
// we can use our hook to check for a logged in user.
function AuthenticatedRoute() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Outlet/> //<Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/forum" element={<AuthenticatedRoute />}>
            <Route exact path="/forum" element={<Forum />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-pwd" element={<AuthenticatedRoute />}>
            <Route path="/forgot-pwd" element={<Fpasswd />} />
          </Route>
          <Route path="/forgot-pwd" element={<Fpasswd />} />
          <Route path="/profile" element={<AuthenticatedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/home" element={<AuthenticatedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/edit-profile" element={<AuthenticatedRoute />}>
            <Route path="/edit-profile" element={<ProfilePageEdit />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
