import * as api from '../apis/index.js';

export const createPost = (postData) => async(dispatch)=>{
    try{
        const {data} = await api.createPost(postData);
        dispatch({type:'CREATE',payload:data});
    }catch(err){
        console.log(err);
    }
}
export const updatePost = (postData,id) => async(dispatch)=>{
    try{
        dispatch({type:'StART_LOADING'});
        const {data} = await api.updatePost(postData,id);
        dispatch({type:'UPDATE',payload:data});
        dispatch({type:'END_LOADING'});
    }catch(err){
        console.log(err);
    }
}
export const likePost = (id) => async(dispatch)=>{
    try{
        const {data} = await api.likePost(id);
        dispatch({type:'LIKE',payload:data});
    }catch(err){
        console.log(err);
    }
}
export const getPost = (page)=>async (dispatch)=>{
    try{
        dispatch({type:'StART_LOADING'});
        const {data} = await api.getPost(page);
        dispatch({type:'FETCH_ALL',payload:data});
        dispatch({type:'END_LOADING'});
    }catch(err){
        console.log(err);
    }
}
export const getPostById = (id)=>async(dispatch)=>{
    try{
        dispatch({type:'StART_LOADING'});
        const {data} = await api.getPostById(id);
        dispatch({type:'FETCH_BY_ID',payload:data})
        dispatch({type:'END_LOAD'});
    }catch(err){
        console.log(err);
    }
}
export const deletePost = (id) =>async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:'DELETE',payload:id})
    }catch(err){
        console.log(err);
    }
}