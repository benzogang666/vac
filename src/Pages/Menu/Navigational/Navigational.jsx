import "./Navigational.css";
import { useCart } from "../../../Contexts/CartContext/CartContext";
import { NavLink } from "react-router-dom";

const Navigational = ({ navigational, snap }) => {
  const { getTotalPrice } = useCart();
  return (
    <>
      <div className="navigational">
        {navigational.map((line) => (
          <div
            onClick={() => snap(line.reference)}
            key={line.id}
            className="navigation"
          >
            {line.navigation}
          </div>
        ))}
        <NavLink to="/cart" className="cart-navigation">
          {getTotalPrice()}
        </NavLink>
      </div>
    </>
  );
};

export default Navigational;