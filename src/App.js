import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Auth from "./components/auth/Auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostDetail from "./components/postDetail/PostDetail.js";

function App() {
  return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element = {<Navigate to = "/posts" />} />
      <Route exact path="/posts" element={<Home/>} />
      <Route path='/auth' element={!(JSON.parse(localStorage.getItem('profile')))?<Auth />:<Navigate to ="/posts"/>} />
      <Route path ="/posts/search"  exact element={<Home/>} />
      <Route path="/posts/:id" element={<PostDetail />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
