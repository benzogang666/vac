import { createBrowserRouter } from "react-router-dom";

import Start from "./Pages/Start/Start";

import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/vac/start",
    element: <Start />,
  },
  {
    path: "/vac/",
    element: <Menu />,
  },
  {
    path: "/vac/cart",
    element: <Cart />,
  },
  {
    path: "/vac/search",
    element: <Search />,
  },
]);

export default router;
