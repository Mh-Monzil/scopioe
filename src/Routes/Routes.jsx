import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SingUp/SignUp";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children : [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/sign-in",
            element: <SignIn />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        },
      ]
    },
  ]);