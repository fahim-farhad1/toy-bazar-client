import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/All Toys/AllToys";
import SingleToyData from "../Pages/Home/ShopByCategory/SingleToyData";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import AddAToy from "../Pages/Add a Toy/AddAToy";
import MyToys from "../Pages/My Toys/MyToys";
import BlogPage from "../Pages/Blogs/BlogPage";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoutes>
            <SingleToyData></SingleToyData>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-bazar-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "addatoy",
        element: (
          <PrivateRoutes>
            <AddAToy></AddAToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
