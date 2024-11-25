import "./Search.css";
import { useState } from "react";
import nutrition from "../../../assets/nutrition";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext/CartContext";

const Search = () => {
  const { addToCart, getTotalPrice } = useCart();

  const [searchTerm, setSearchTerm] = useState(""); // Строка поиска

  const structure = nutrition.structure;

  const filterStructure = (data, term) => {
    const filtered = {};
    for (const [category, subcategories] of Object.entries(data)) {
      const matchedSubcategories = {};
      for (const [subcategory, items] of Object.entries(subcategories)) {
        if (Array.isArray(items)) {
          const matchedItems = items.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          );

          if (matchedItems.length > 0) {
            matchedSubcategories[subcategory] = matchedItems;
          }
        }
      }

      if (Object.keys(matchedSubcategories).length > 0) {
        filtered[category] = matchedSubcategories;
      }
    }
    return filtered;
  };

  const filteredData = filterStructure(structure, searchTerm);

  return (
    <>
      {/* <NavLink to="/">Вернутся в Меню</NavLink> */}
      <div className="search">
        <input
          className="search-field"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm ? (
          Object.keys(filteredData).length > 0 ? (
            <div className="results">
              {Object.entries(filteredData).map(([category, subcategories]) => (
                <div key={category}>
                  {Object.entries(subcategories).map(([subcategory, items]) => (
                    <div key={subcategory}>
                      {items.map((item) => (
                        <div className="result-card" key={item.id}>
                          {item.name}
                          <div className="result-card-add" onClick={() => addToCart(item)}>
                            +
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>No results found</p>
          )
        ) : null}{" "}
        {/* Если строки поиска нет, ничего не отображаем */}
        <NavLink to="/cart" className="cart-navigation">
          {getTotalPrice()}
        </NavLink>
      </div>
    </>
  );
};

export default Search;
