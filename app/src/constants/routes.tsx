import ShoppingCart from "../components/Cart";
import About from "../pages/About";
import Home from "../pages/Home";
import Items from "../pages/Items";
import ProfilePage from "../pages/ProfilePage";

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
];

export default routes;
