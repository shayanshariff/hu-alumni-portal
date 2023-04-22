import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_NUM_POSTS, FETCH_ALL_POSTS} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getAllPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAllPosts();
        dispatch({type: FETCH_ALL, payload: data});
    }
    catch(error){
        console.log(error);
    }
    
}

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});
    }
    catch(error){
        console.log(error);
    }
    
}
export const getAlumniPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAlumniPosts();
        
        dispatch({type: FETCH_ALL, payload: data});
        
    }
    catch(error){
        console.log(error);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    }
    catch(error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data});
    }
    catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try {
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    }
    catch(error){
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        console.log("data", data);
        dispatch({type: LIKE, payload: data});
    }
    catch(error){
        console.log(error);
    }
}

export const fetchNumPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchNumPosts();
      dispatch({ type: FETCH_NUM_POSTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };