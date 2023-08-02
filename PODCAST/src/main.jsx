import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import GenrePage from "./Pages/Genre";
import SeasonsPage from "./Pages/Seasons";
import HomePage from "./Pages/Home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path:"/home", element: <HomePage /> 
 },

  {
     path:"/genre", element: <GenrePage /> 
  },

  {
    path: "/seasons", element: <SeasonsPage /> 
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);







      
   



