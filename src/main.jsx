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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Course",
        element: <Course />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Aduverse",
        element: <Aduvarse />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Shop/:id",
        element: <ShopDetail />,
      },
      {
        path: "/Code",
        element: <Code />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Course/:id",
        element: <CourseDetail />,
      },
      {
        path: "/Heroshop",
        element: <Heroshop />,
      },
      {
        path: "/Heroshop/:id",
        element: <ShopDetail />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>,
);
