import ShoppingCart from "../components/Cart";
import About from "../pages/About";
import Home from "../pages/Home";
import Items from "../pages/Items";

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
];

export default routes;
