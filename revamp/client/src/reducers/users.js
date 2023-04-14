import { FETCH_USER,AUTH, LOGOUT, FOLLOW_USER, UNFOLLOW_USER  } from '../constants/actionTypes';

const initialState = {
  fetchedUsers: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, fetchedUsers: { ...state.fetchedUsers, [action.payload._id]: action.payload }};
    case FOLLOW_USER:
    case UNFOLLOW_USER:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};

export default userReducer;
