import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTopics from "./pages/MyTopics";
import Profil from "./pages/Profil";
import CreateForum from "./pages/CreateForum";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tags",
    element: <Tags />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/my-topics",
    element: <MyTopics />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/create-forum",
    element: <CreateForum />,
  },
  // {
  //   path: "/forum/:id",
  //   element: <Profil />,
  // },
]);
