import React from "react";
import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            <Container maxwidth="false" disableGutters="true">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;