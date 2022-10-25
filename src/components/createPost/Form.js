import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/Post";
 

function Form({currentId,setCurrentId}) {
    // const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [formData,setFormData] = useState({
        title:'',
        subTitle:'',
        message:'',
        image:''
    });

    const post = useSelector((state)=>
      currentId?state.posts.posts.find((p)=> p._id===currentId):null
    );
    useEffect(()=>{
      if(post){
        setFormData({title:post.title,subTitle:post.subTitle,message:post.message,image:post.image})
        // console.log(post);
      }
    },[post])
    const handleInput = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
          dispatch(updatePost(formData,currentId));
        }else{
          dispatch(createPost(formData));
        }
        clear();
    }
   
    const clear = ()=>{
      setCurrentId(null);
      console.log(formData);
      setFormData({
        title:'',
        subTitle:'',
        message:'',
        image:''
      })
    }
  return (
    <div className="p-4 sm:ml-2 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
      {/* Create Post */}
      {/* title */}
      {/* subtitle */}
      {/* tags */}
      {/* message */}
      {/* image */}
      {/* button */}
      <h4 className="text-center text-xl font-mono text-gray-700 mb-4 font-bold">Create Post</h4>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInput}
          className="mb-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Title"
        />
        <input
          type="text"
          name="subTitle"
          value={formData.subTitle}
          onChange={handleInput}
          className="mb-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="SubTitle"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInput}
          className="mb-1 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          placeholder="Message"
        ></textarea>
         <FileBase
              type="file"
              multiple={false}
              value={formData.image}
              onDone={({ base64 }) =>
                setFormData({ ...formData, image: base64 })
              }
            />
        {/* <input name="image" type='file' onDone={({base64})=>setFormData({...formData,image:base64})} className='mb-2 w-fit text-base text-gray-700 hover:file:bg-gray-300 hover:file:cursor-pointer hover:file:outline-none file:border-0 file:rounded' /> */}
        <button type="submit" className=" w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
         
      </form>
    </div>
  );
}

export default Form;
