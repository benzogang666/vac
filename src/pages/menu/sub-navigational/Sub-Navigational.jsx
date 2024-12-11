import "./Sub-Navigational.css";
import { NavLink } from "react-router-dom";
import menuData from "../../../assets/menuData";

const Sub_Navigational = ({ category }) => {
  const subCategories = Object.keys(menuData[category] || {});

  return (
    <div className="sub-navigational">
      {subCategories.map((subCategory) => (
        <NavLink
          className="sub-navigation"
          to={`/menu/${category}/${subCategory}`}
          key={subCategory}
        >
          {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
        </NavLink>
      ))}
    </div>
  );
};

export default Sub_Navigational;