import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const Navigate = useNavigate();
  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
    Navigate("/auth");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex flex-wrap justify-between px-10 py-5">
        <NavLink to="/">
          <span className="font-bold text-xl">Blogs</span>
        </NavLink>
        <div className="flex flex-wrap">
          {user ? (
            <div className="flex">
              <div className="w-8 h-8 align-middle text-center text-xl font-medium  mr-4 bg-white cursor-pointer rounded-full">
                {user.result.name.charAt(0)}
              </div>
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          ) : (
            <Link to="/auth">SignIn</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
