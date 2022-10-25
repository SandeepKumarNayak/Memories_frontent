import React, { useEffect, useState } from "react";
import Form from "./createPost/Form";
import Posts from "./posts/Posts";
import { getPost } from "../actions/Post";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPost(1));
  }, [dispatch]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 p-10">
        <div className="col-span-3 md:order-last  md:col-span-1 m-4">
          {!user ? (
            <div className= " shadow-[0_0_10px_rgba(0,0,0,0.5)] text-center pt-8 pb-8">
              <h1 className="mb-4">Sign In for Creating New Posts</h1>
              <Link className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" to="/auth">SignIn</Link>
            </div>
          ) : (
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          )}
        </div>
        <div className="col-span-3 md:col-span-2">
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
}

export default Home;
