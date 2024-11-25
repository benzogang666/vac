import "./Card-Cart.css";
import { useCart } from "../../Contexts/CartContext/CartContext";

const Card_Cart = ({ round }) => {
  const { decreaseQuantity, addToCart, removeFromCart } = useCart();

  return (
    <>
      {round.map((line) => {
        return (
          <div className="reserve" key={line.id}>
            <div className="reserve-face"></div>
            <div className="reserve-data">
              <div className="reserve-name">{line.name}</div>
              <div>{line.price} ₸</div>
              <div className="reserve-counter">
                <div className="reserve-price">
                  <div
                    className="reserve-quantity"
                    onClick={() => decreaseQuantity(line.id)}
                  >
                    -
                  </div>
                  {line.quantity}
                  <div
                    className="reserve-quantity"
                    onClick={() => addToCart(line)}
                  >
                    +
                  </div>
                </div>

                <div className="reserve-plis">
                  {line.price * line.quantity} ₸
                </div>
              </div>
            </div>
            <div
              className="reserve-remove"
              onClick={() => removeFromCart(line.id)}
            >
              🗙
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card_Cart;