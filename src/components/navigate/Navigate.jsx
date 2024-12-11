import "./Navigate.css";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();

  const navigate_back = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="navigate" onClick={navigate_back}>
        Назад
      </div>
    </>
  );
};

export default Navigate;