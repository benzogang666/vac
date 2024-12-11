import "./Navigational.css";
import { useCart } from "../../../Contexts/сartContext/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import menuData from "../../../assets/menuData";

const Navigational = () => {
  const { getTotalPrice } = useCart();
  const navigate = useNavigate();

  const firstSubNavigational = (category) => {
    const subCategories = Object.keys(menuData[category] || {});
    if (subCategories.length > 0) {
      navigate(`/menu/${category}/${subCategories[0]}`);
    } else {
      navigate(`/menu/${category}`);
    }
  };

  return (
    <div className="navigational">
      {Object.keys(menuData).map((category) => (
        <div
          key={category}
          className="navigation"
          onClick={() => firstSubNavigational(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      ))}
      {getTotalPrice() > 0 && (
        <NavLink to="/cart" className="cart-navigate">
          {getTotalPrice()}
        </NavLink>
      )}
    </div>
  );
};

export default Navigational;