import "./Cart.css";
import Card_Cart from "../../components/card-cart/Card-Cart";
import Navigate from "../../components/navigate/Navigate";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Contexts/сartContext/CartContext";

const Cart = () => {
  const { cart, clearCart } = useCart();

  if (!cart.length) {
    return (
      <div className="cart-empty">
        <div>Пустая Корзина</div>
        <NavLink to="/menu">Вернутся в Меню</NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="cart">
        <Navigate />

        <div className="cart-navigational">
          <NavLink className="cart-navigation" to="/checklist">
            Посмотреть⠀чек
          </NavLink>
          <div className="cart-navigation" onClick={() => clearCart()}>
            Очистить⠀корзину
          </div>
        </div>

        <div className="cart-reservoir">
          <Card_Cart round={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
