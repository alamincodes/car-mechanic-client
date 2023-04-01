import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../context/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const navName = [
    { id: 1, name: "home", link: "/" },
    { id: 2, name: "about", link: "/about" },
    { id: 3, name: "services", link: "/services" },
  ];
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="navbar bg-white sticky top-0 z-20">
      <Link to="/" className="navbar-start">
        <div>
          {/* logo */}
          <img src={Logo} className="h-14 " alt="" />
        </div>
      </Link>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold px-1">
          {navName.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.link}
              className={({ isActive }) =>
                isActive ? "bg-black text-white rounded-md" : undefined
              }
            >
              <li key={nav.id} className="px-4 p-2">
                {nav.name}
              </li>
            </NavLink>
          ))}

          {user?.email && (
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "bg-black text-white rounded-md" : undefined
              }
            >
              <li className="px-4 p-2">Order</li>
            </NavLink>
          )}
          {user ? (
            <>
              {user?.displayName && (
                <li className="px-4 p-2 bg-orange-100 text-orange-800 rounded-full ml-2">
                  {user.displayName}
                </li>
              )}
              <li
                onClick={logOut}
                className="px-4 p-2 bg-red-100 text-red-800 cursor-pointer rounded-full ml-2"
              >
                Log Out
              </li>
            </>
          ) : (
            <>
              <Link className="px-4 p-2  rounded-full ml-2" to="/login">
                <li>Login</li>
              </Link>

              <Link
                to="/signup"
                className="px-4 p-2 bg-red-100 text-red-800 cursor-pointer rounded-full ml-2"
              >
                <li onClick={logOut}>Sign Up</li>
              </Link>
            </>
          )}
        </ul>
      </div>

      {user?.email ? (
        <div className="navbar-end lg:hidden">
          <button onClick={logOut} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="navbar-end lg:hidden">
          <button onClick={logOut} className="btn">
            Login
          </button>
        </Link>
      )}
      {/* phone */}
      <div onClick={() => setOpen(!open)} className="lg:hidden">
        {open ? (
          <XMarkIcon className="text-black h-10 w-7" />
        ) : (
          <Bars3BottomRightIcon className="text-black h-10 w-7" />
        )}
      </div>
      <div
        className={`lg:hidden absolute  bg-slate-800 text-white duration-500 left-0 w-full ${
          open ? "top-[70px]" : "top-[-200px] right-0"
        }`}
      >
        <ul>
          {navName.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.link}
              className={({ isActive }) =>
                isActive ? "bg-black  text-white" : undefined
              }
            >
              <li key={nav.id} className="px-4 p-2">
                {nav.name}
              </li>
            </NavLink>
          ))}
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-black  text-white" : undefined
            }
          >
            <li className="px-4 p-2">{user?.displayName}</li>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "bg-black  text-white" : undefined
            }
          >
            <li className="px-4 p-2">Orders</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
