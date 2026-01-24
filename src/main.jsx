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
import CourseDetail from "./Pages/CourseDetail.jsx";


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
        path: "/Aduverse",
        element: <Aduvarse />,
      },
      {
        path: "/Shop",
        element: <Shop />,
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
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
