import { AUTH, FETCH_USERS } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);

    // Fetch the updated user data after signing in
    const { data: userData } = await api.fetchUserById(data.result._id);
    const updatedData = { ...data, result: userData };

    dispatch({ type: AUTH, data: updatedData });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    // Fetch the updated user data after signing up
    const { data: userData } = await api.fetchUserById(data.result._id);
    const updatedData = { ...data, result: userData };

    dispatch({ type: AUTH, data: updatedData });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
