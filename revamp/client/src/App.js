import React from "react";
import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import AlumniForum from "./components/AlumniForum/AlumniForum";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BreakDown from "./components/Graphs/indexbreakdownchart";
import barchart from "./components/Graphs/indexbarchart";
import Dashboard from "./components/Dashboard";
const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
   
    return (
        <BrowserRouter>
            <Container maxwidth="false" disableGutters="true">
                <Navbar/>
                <Switch>
                    <Route path="/posts" exact component={Home}/>
                    <Route path="/posts/alumni" exact component={AlumniForum}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/breakdown" exact component={BreakDown}/>
                    <Route path="/barchart" exact component={barchart}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;