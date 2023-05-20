import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Displayed from "../Layout/Displayed";
import AllToys from "../Pages/All Toys/AllToys";
import SingleToyData from "../Pages/Home/ShopByCategory/SingleToyData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Displayed></Displayed>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        
      },
      {
        path: "allToys/:id",
        element: <SingleToyData></SingleToyData>,
        loader: ({ params }) =>
          fetch(`https://toy-bazar-server.vercel.app/allToys/${params.id}`),
      },
    ],
  },
]);

export default router;
