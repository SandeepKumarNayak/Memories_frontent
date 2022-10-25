import * as api from '../apis/index.js';

export const signIn = (formData,navigate) => async(dispatch)=>{
    try{
        const {data} = await api.signIn(formData);
        localStorage.setItem('profile',JSON.stringify(data));
        dispatch({type:'AUTH',data});
        navigate('/')
    }catch(err){
        console.log(err);
    }
}

export const signUp = (formData,navigate)=>async(dispatch)=>{
    try{
        const {data} = await api.signUp(formData);
        localStorage.setItem('profile',JSON.stringify(data));
        dispatch({type:'AUTH',payload:data});
        navigate('/');
    }catch(err){
        console.log(err);
    }
}