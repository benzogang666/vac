import "./CheckList.css";

import { useCart } from "../../../contexts/сartContext/CartContext";
import Navigate from "../../../components/navigate/Navigate";

const CheckList = () => {
  const { cart, getTotalPrice } = useCart();
  return (
    <>
      <div className="checklist">
        <Navigate />
        <div className="checklist-container">
          {cart.map((line) => (
            <div className="card-checklist" key={line.id}>
              <div>{line.name}</div>
              <div>{line.quantity}</div>
              <div>{line.price}</div>
              <div>{line.quantity * line.price}</div>
            </div>
          ))}
        </div>
        <div className="total-checklist">
          <div>Итого: {getTotalPrice()}</div>
          <div>Процент обслуживание 5%: {getTotalPrice() * 0.05}</div>
          <div>К оплате: {getTotalPrice() + getTotalPrice() * 0.05}</div>
        </div>
      </div>
    </>
  );
};

export default CheckList;