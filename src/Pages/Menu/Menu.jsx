import { useState, useEffect } from "react";
import nutrition from "../../../assets/nutrition";
import { NavLink } from "react-router-dom";

import Navigational from "./Navigational/Navigational";
import Sub_Navigational from "./Sub-Navigational/Sub-Navigational";
import Structure from "./Structure/Structure";

const Menu = () => {
  const [activeNavigational, setActiveNavigational] = useState("fastfood");
  const [activeSubNavigation, setActiveSubNavigation] = useState("");

  const setDefaultSubCategory = (tab) => {
    const firstSubCategory =
      nutrition.sub_navigational[tab]?.[0]?.reference || "";
    setActiveSubNavigation(firstSubCategory);
  };

  useEffect(() => {
    setDefaultSubCategory(activeNavigational);
  }, [activeNavigational]);

  const snapNavigational = (navigate) => {
    setActiveNavigational(navigate);
    if (navigate !== activeNavigational) {
      setDefaultSubCategory(navigate);
    }
  };

  const snapSub_navigational = (navigate) => {
    setActiveSubNavigation(navigate);
  };

  return (
    <>
      <NavLink to="/search" className="search-field">Поиск</NavLink>

      <Navigational
        navigational={nutrition.navigational}
        snap={snapNavigational}
      />

      <Sub_Navigational
        activeNavigational={activeNavigational}
        subNavigational={nutrition.sub_navigational}
        snap={snapSub_navigational}
      />

      <Structure
        activeNavigational={activeNavigational}
        structure={nutrition.structure}
        activeSubNavigation={activeSubNavigation}
      />
    </>
  );
};

export default Menu;