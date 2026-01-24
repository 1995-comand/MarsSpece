import React, { useContext, useState } from "react";
import logo from "../assets/mars logo.webp";
import { AppContext } from "../Context/AppContext";

const Header = () => {
   const {coin, SetCoin} = useContext(AppContext);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <img className="w-50" src={logo} alt="" />
        </div>
        <div className="flex gap-2">
          <div>
            <div className="flex items-center gap-6">
              <p className="border-[1px] rounded border-[#adadad] w-fit px-2 py-1">
                🔥{coin}
              </p>

              <p className="border-[1px] rounded border-[#adadad] w-fit px-2 py-1">
                🪙{coin}
              </p>

              <p className="border-[1px] rounded border-[#adadad] w-fit px-2 py-1">
                ⚡{coin}
              </p>

              <button className="bg-gradient-to-r from-[#ce42ff] via-[#27b0fc ] to-[#3bf1da] text-white px-4 py-2 rounded font-bold text-[18px] hover-3d">
                Подписаться
              </button>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
