import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Course from "./Pages/Course.jsx";
import Aduvarse from "./Pages/Aduvarse.jsx";
import Shop from "./Pages/Shop.jsx";
import Code from "./Pages/Code.jsx";
import Blog from "./Pages/Blog.jsx";
import Profile from "./Pages/Profile.jsx";
import Home from "./Pages/Home.jsx";
import CourseDetail from "./Pages/CourseDetail.jsx";
import Heroshop from "./Pages/Heroshop.jsx";
import ShopDetail from "./Pages/ShopDetail.jsx";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "course",
            element: <Course />,
          },
          {
            path: "course/:id",
            element: <CourseDetail />,
          },
          {
            path: "aduverse",
            element: <Aduvarse />,
          },
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "shop/:id",
            element: <ShopDetail />,
          },
          {
            path: "heroshop",
            element: <Heroshop />,
          },
          {
            path: "heroshop/:id",
            element: <ShopDetail />,
          },
          {
            path: "code",
            element: <Code />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
