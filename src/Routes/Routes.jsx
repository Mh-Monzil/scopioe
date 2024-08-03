import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SingUp/SignUp";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NewListings from "../Pages/NewListings/NewListings";
import Search from "../Pages/Search/Search";
import Favorites from "../Pages/Favorites/Favorites";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import Settings from "../Pages/Settings/Settings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "new-listing",
        element: (
          <PrivateRoute>
            <NewListings />
          </PrivateRoute>
        ),
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "help-center",
        element: <HelpCenter />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
