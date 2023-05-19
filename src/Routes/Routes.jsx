import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Displayed from "../Layout/Displayed";
import Toy from "../Pages/Home/ShopByCategory/Toy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Displayed></Displayed>
        },
        {
            path: 'home',
            element: <Home></Home>
        },
        {
          path: 'toys/:id',
          element: <Toy></Toy>,
          loader: ({params}) => fetch(`https://toy-bazar-server.vercel.app/toys/${params.id}`)
        }
        ]
    },
  ]);


  export default router;