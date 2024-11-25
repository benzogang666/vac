import "./Cart.css";
import { useCart } from "../../Contexts/CartContext/CartContext";
import Card_Cart from "../../Components/Card-Cart/Card-Cart";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <>
      <div className="cart">
        <NavLink to="/" className="cart-back">Вернутся в Меню</NavLink>
        {cart.length === 0 ? (
          <div className="cart-hollow">Корзина пуста</div>
        ) : (
          <Card_Cart round={cart} />
        )}
        <div className="cart-total">
          Общая сумма: {getTotalPrice()} ₸
          <br />
          Процент за обслуживание 5%: {getTotalPrice() * 0.05} ₸
        </div>
      </div>
    </>
  );
};

export default Cart;
