import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5001'});



API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });
  

export const fetchPosts = () => API.get('/posts');
export const fetchAlumniPosts = () => API.get('/posts/alumni');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchNumPosts = () => API.get("/posts/numPosts");
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const fetchUserById = (id) => API.get(`/user/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchUserLikes = (id) => API.get(`/user/user-likes/${id}`);
export const get = () => API.get('/dashboard');
export const fetchUsers = () => API.get('/user');
export const followUser = (id) => API.patch(`/user/${id}/follow`);
export const unfollowUser = (id) => API.patch(`/user/${id}/unfollow`);
export const fetchUserData = (id) => API.get(`/user/data/${id}`);
export const updateUser = (id, updatedData) => API.patch(`/user/${id}`, updatedData);
export const fetchAllPosts = () => API.get('/posts/all');
export const fetchProfileData = (url) => API.post('/linkedin/getProfileData', { url });
