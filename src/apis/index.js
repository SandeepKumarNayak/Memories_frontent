import axios from 'axios';
const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})


export const signIn = (formData)=> API.post('/user/signin',formData);
export const signUp = (formData)=> API.post('/user/signup',formData);

export const createPost = (formData)=> API.post('/post/createPost',formData);
export const getPost = (page)=> API.get(`/post?page=${page}`);
export const getPostById = (id)=> API.get(`/post/${id}`);
export const deletePost = (id) => API.delete(`/post/${id}`);
export const updatePost = (formData,id) => API.patch(`/post/${id}`,formData);
export const likePost = (id) => API.patch(`/post/${id}/like`);