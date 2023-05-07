import * as api from '../api';
import { FETCH_USER,FOLLOW_USER, UPDATE_USER, UNFOLLOW_USER, FETCH_USER_DATA , FETCH_USERS} from '../constants/actionTypes';

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserById(id);
    dispatch({ type: FETCH_USER, payload: data });
    return data;
  } catch (error) {
    console.log("Error:", error.message);
    console.log("Error details:", error);

  }
};

export const updateUser = (id, updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, updatedData);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log('Error updating user:', error);
  }
};

export const followUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.followUser(id);

    dispatch({ type: FOLLOW_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.unfollowUser(id);

    dispatch({ type: UNFOLLOW_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const fetchUserData = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserData(id);

    dispatch({ type: FETCH_USER_DATA, payload: data });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export const fetchUserLikes = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserLikes(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers(); // Fetch users data from API
   

    dispatch({ type: 'FETCH_USERS', payload: data }); // Dispatch action with fetched data
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};