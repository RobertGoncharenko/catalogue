import ShoppingCart from "../components/Cart";
import About from "../pages/About";
import Home from "../pages/Home";
import Items from "../pages/Items";
import ProfilePage from "../pages/ProfilePage";
import Sigin from "../pages/Sigin";
import SignUp from "../pages/SignUp";

const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "items",
    element: <Items/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "cart",
    element: <ShoppingCart/>,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "signin",
    element: <Sigin />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
];

export default routes;
