import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import logo from "./assets/mars logo.webp";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import { FaBook } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { FaShop } from "react-icons/fa6";


const App = () => {
  const [coin, SetCoin] = useState(0);

  return (
    <AppContext.Provider value={{ coin, SetCoin }}>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
     

          <div className="p-4">
            <Header />
            <Outlet />
            <ToastContainer />
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            <ul className="menu w-full grow">
              <Link to={"/"}>
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Homepage"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-4"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>

                    <span className="is-drawer-close:hidden">Home</span>
                  </button>
                </li>
              </Link>

              <Link to={"/Course"}>
                <li>
                  <button
                    className="h-[50px] is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Course"
                  >
                    <FaBook/>
                    <span className="is-drawer-close:hidden">Course</span>
                  </button>
                </li>
              </Link>
              <Link to={"/Aduverse"}>
                <li>
                  <button
                    className=" h-[50px] is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Aduvarse"
                  >
                   <BsFillCameraVideoFill />
                    <span className="is-drawer-close:hidden">Aduverse</span>
                  </button>
                </li>
              </Link>
              <Link to={"/Code"}>
                <li>
                  <button
                    className="h-[50px] is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Mars code"
                  >
                    <FaPython />
                    <span className="is-drawer-close:hidden">Code</span>
                  </button>
                </li>
              </Link>
              <Link to={"/Blog"}>
                <li>
                  <button
                    className="h-[50px] is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Blog"
                  >
                    <LuNewspaper />
                    <span className="is-drawer-close:hidden">Blog</span>
                  </button>
                </li>
              </Link>
              <Link to={"/Shop"}>
                <li>
                  <button
                    className="h-[50px] is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Shop"
                  >
                   <FaShop />
                    <span className="is-drawer-close:hidden">Shop</span>
                  </button>
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
