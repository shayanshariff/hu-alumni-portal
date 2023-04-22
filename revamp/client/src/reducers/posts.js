import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_NUM_POSTS} from "../constants/actionTypes";

const posts = (state = { posts: [], numPosts: 0 }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, posts: action.payload };
        case UPDATE:
        case LIKE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };

        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case FETCH_NUM_POSTS:
            return { ...state, numPosts: action.payload };
        default:
            return state;
    }
}

export default posts;