import "./Card-Menu.css";
import { useCart } from "../../Contexts/CartContext/CartContext";

const Card = ({ round }) => {
  const { addToCart } = useCart();
  return (
    <>
      {round.map((line) => {
        return (
          <div className="card" key={line.id}>
            <div className="card-face">not face</div>
            <div className="card-data">
              <div className="card-name">{line.name}</div>
              <div className="card-details">{line.details}</div>
              <div onClick={() => addToCart(line)} className="card-price">
                {line.price}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;