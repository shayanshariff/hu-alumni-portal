import React from "react";
import {Container} from "@material-ui/core";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import AlumniForum from "./components/AlumniForum/AlumniForum";
import Dashboard from "./components/Dashboard";
import Chat from "./components/chatpage/chat";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    //const mode = useSelector((state) => state.global.mode);
    const theme = createTheme(themeSettings("light"));
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxwidth="false" disableGutters="true">
                    <Navbar/>
                    <Switch>
                        <Route path="/posts" exact component={Home}/>
                        <Route path="/posts/alumni" exact component={AlumniForum}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/chat" exact component={Chat}/>
                        <Route path="/" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                    </Switch>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
        
    );
}

export default App;