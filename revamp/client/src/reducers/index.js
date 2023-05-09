import {combineReducers} from "redux";
import posts from "./posts";
import auth from "./auth";
import dash from "./dashboard";
import user from "./users";
import linkedin from "./linkedin";

export default  combineReducers({posts, auth, dash, user, linkedin});