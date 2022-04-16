import React from "react";
import { Link, useNavigate } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { redirect } from "@remix-run/node";

type Props = {};

function NavBar({}: Props) {
  return (
    <div>
      <div className="navbar bg-base-100 border-zinc-400 shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                width={35}
                height={36}
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={35} height={36} fill="none" />
                <circle
                  cx={18}
                  cy={19}
                  r="13.5"
                  stroke="white"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 16L18.2414 25L26 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/$user/lv8r/0">LV8R:RIDE</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Pitch
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 z-50">
                  <li>
                    <Link to="">Make</Link>
                  </li>
                  <li>
                    <Link to="">Delete</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="btn btn-ghost normal-case text-2xl">LV8R</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a>
                Pitch
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-30 glass bg-base-100 hover:bg-base-00 ">
                <li>
                  <a>Make</a>
                </li>
                <li>
                  <a>Edit</a>
                </li>
              </ul>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/*     <a className="btn">User Avatar</a> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
