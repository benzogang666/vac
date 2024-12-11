import { createBrowserRouter } from "react-router-dom";

import Start from "./pages/start/Start";

import Menu from "./pages/menu/Menu";
import Reservoir from "./pages/menu/reservoir/Reservoir";

import Cart from "./pages/cart/Cart";
import CheckList from "./pages/cart/checklist/CheckList";

import Search from "./pages/search/Search";

const router = createBrowserRouter([
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/:category",
    element: <Menu />,
    children: [
      {
        path: ":subcategory",
        element: <Reservoir />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "checklist",
    element: <CheckList />,
  },
]);

export default router;