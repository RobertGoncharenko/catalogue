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
];

export default routes;
