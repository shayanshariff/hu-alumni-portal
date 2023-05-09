import { FETCH_PROFILE_DATA } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const fetchProfileData = (url) => async (dispatch) => {
    try {
      const { data } = await api.fetchProfileData(url);
      return dispatch({ type: FETCH_PROFILE_DATA, payload: data }); // Add return statement here
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };
  
