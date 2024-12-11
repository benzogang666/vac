import { useParams } from "react-router-dom";
import menuData from "../../../assets/menuData";
import Card_Reservoir from "../../../components/card-reservoir/Card-Reservoir";

const Reservoir = () => {
  const { category, subcategory } = useParams();
  const items = menuData[category]?.[subcategory] || [];

  return (
    <>
      <div className="reservoir">
        <Card_Reservoir round={items} />
      </div>
    </>
  );
};

export default Reservoir;