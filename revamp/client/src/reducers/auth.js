import * as actionType from "../constants/actionTypes";

const authReducer = (state = {authData: null}, action) => {
    switch(action.type){
        case actionType.AUTH:
            console.log("hello");
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            console.log(localStorage.getItem('profile'));
          
      return { ...state, authData: action.data, loading: false, errors: null };
      case actionType.LOGOUT:
        localStorage.clear();
  
        return { ...state, authData: null, loading: false, errors: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  