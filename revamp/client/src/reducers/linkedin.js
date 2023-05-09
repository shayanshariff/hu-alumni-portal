import { FETCH_PROFILE_DATA } from '../constants/actionTypes';

const initialState = {
  profileData: null,
};

const linkedinReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_DATA:
      return { ...state, profileData: action.payload };
    default:
      return state;
  }
};

export default linkedinReducer;
