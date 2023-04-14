import * as api from '../api';
import { FETCH_USER,FOLLOW_USER, UNFOLLOW_USER } from '../constants/actionTypes';

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUserById(id);
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log("Error:", error.message);
    console.log("Error details:", error);

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
