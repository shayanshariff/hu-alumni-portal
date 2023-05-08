// import React from "react";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";

// const Sidebar = ({ isSidebar }) => {
//   return (
//     <>
//       {isSidebar && (
//         <ProSidebar>
//           <Menu iconShape="square">
//             <MenuItem>Dashboard</MenuItem>
//             <SubMenu title="Components">
//               <MenuItem>Component 1</MenuItem>
//               <MenuItem>Component 2</MenuItem>
//             </SubMenu>
//           </Menu>
//         </ProSidebar>
//       )}
//     </>
//   );
// };

// export default Sidebar;

import React, {useState, useEffect} from "react";
import {Avatar, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {Link, useHistory, useLocation} from "react-router-dom";
import * as actionType from '../../constants/actionTypes';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import useStyles from "./styles";
import logo from "../../images/habib_logo.png";

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import ForumIcon from '@material-ui/icons/Forum';

const Sidebar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
  
    const toggleVisibility = () => {
      setIsVisible(prevState => !prevState);
    };
  
    const logout = () => {
      dispatch({type: actionType.LOGOUT});
      setUser(null);
      history.push("/");
    };
  
    useEffect(() => {
      const token = user?.token;
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
  
    return (
      <div className={classes.sidebar + " " + (isVisible ? classes.showSidebar : classes.hideSidebar)}>
        <div className={classes.brandContainer}>
          <img className={classes.image} src={logo} alt="habib-logo" height="60" />
          <Typography className={classes.heading} variant="h5" color="black">Habib University</Typography>
          <button
            className={classes.toggleButton}
            onClick={toggleVisibility}
          >
            {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <Divider />
      <List>
      <ListItem
          component={Link}
          to={{ pathname: '/profile', state: {user: user?.result } }}
          className={`${classes.listItem} ${location.pathname === '/profile' ? classes.active : ''}`}
          button
        >
          <ListItemIcon><Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>{user?.result?.name.charAt(0)}</Avatar></ListItemIcon>
          <ListItemText primary={user?.result?.name} />
        </ListItem>
        <ListItem
          component={Link}
          to="/dashboard"
          className={`${classes.listItem} ${location.pathname === '/dashboard' ? classes.active : ''}`}
          button
        >
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        
        <ListItem
          component={Link}
          to="/Chat"
          className={`${classes.listItem} ${location.pathname === '/Chat' ? classes.active : ''}`}
          button
        >
          <ListItemIcon><ChatIcon /></ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem
          component={Link}
          to="/posts"
          className={`${classes.listItem} ${location.pathname === '/posts' ? classes.active : ''}`}
          button
        >
          <ListItemIcon><ForumIcon /></ListItemIcon>
          <ListItemText primary="Student Forum" />
        </ListItem>
        <ListItem
          component={Link}
          to="/posts/alumni"
          className={`${classes.listItem} ${location.pathname === '/posts/alumni' ? classes.active : ''}`}
          button
        >
          <ListItemIcon><ForumIcon /></ListItemIcon>
          <ListItemText primary="Alumni Forum" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          className={`${classes.listItem}`}
          button
          onClick={logout}
        >
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;