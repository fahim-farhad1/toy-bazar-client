import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Displayed from "../Layout/Displayed";

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
            path: '/home',
            element: <Home></Home>
        }
        ]
    },
  ]);


  export default router;