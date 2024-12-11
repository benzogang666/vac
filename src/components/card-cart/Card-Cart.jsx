import "./Card-Cart.css";
import { MdOutlineClear } from "react-icons/md";
import { useCart } from "../../Contexts/сartContext/CartContext";

const Card_Cart = ({ round }) => {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();
  return (
    <>
      {round.map((line) => (
        <div className="card-cart" key={line.id}>
          <div className="cart-image">image</div>
          <div className="cart-data">
            <div className="cart-name">{line.name}</div>
            <div className="cart-price">{line.price}</div>
            <div className="cart-expense">
              <div className="cart-score">
                <div
                  className="cart-score-button"
                  onClick={() => decreaseQuantity(line.id)}
                >
                  -
                </div>
                {line.quantity}
                <div
                  className="cart-score-button"
                  onClick={() => addToCart(line)}
                >
                  +
                </div>
              </div>
              <div className="cart-line-total-price">
                {line.price * line.quantity}
              </div>
            </div>
            <div
              className="cart-remove"
              onClick={() => removeFromCart(line.id)}
            >
              <MdOutlineClear size={"20px"}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card_Cart;
