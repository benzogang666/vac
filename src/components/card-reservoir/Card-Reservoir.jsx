import "./Card-Reservoir.css";

import { useCart } from "../../Contexts/сartContext/CartContext";

const Card_Reservoir = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();
  return (
    <>
      {round.map((line) => (
        <div className="card-reservoir" key={line.id}>
          <div className="reservoir-image">image</div>
          <div className="reservoir-data">
            <div className="reservoir-name">{line.name}</div>
            <div className="reservoir-detials">{line.details}</div>
            <div className="reservoir-expense">
              <div className="reservoir-price" onClick={() => addToCart(line)}>
                {line.price}
              </div>
              {getProductQuantity(line.id) > 0 && (
                <div className="reservoir-score" key={line.id}>
                  <div
                    className="reservoir-score-button"
                    onClick={() => decreaseQuantity(line.id)}
                  >
                    -
                  </div>
                  {getProductQuantity(line.id)}
                  <div
                    className="reservoir-score-button"
                    onClick={() => addToCart(line)}
                  >
                    +
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card_Reservoir;
