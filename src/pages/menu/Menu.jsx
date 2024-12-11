import { NavLink, useParams, Outlet } from "react-router-dom";
import menuData from "../../assets/menuData";
import Navigational from "./navigational/Navigational";
import Sub_Navigational from "./sub-navigational/Sub-Navigational";

const Menu = () => {
  const { category } = useParams(); // Получаем категорию из параметров маршрута
  const activeCategory = category || Object.keys(menuData)[0]; // Устанавливаем категорию по умолчанию

  return (
    <>
      <NavLink className="search-navigate" to="/search">
        Поиск
      </NavLink>

      <Navigational />

      <Sub_Navigational category={activeCategory} />

      <Outlet />
    </>
  );
};

export default Menu;