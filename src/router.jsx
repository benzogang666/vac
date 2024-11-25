import { createBrowserRouter } from "react-router-dom";

import Start from "./Pages/Start/Start";

import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;