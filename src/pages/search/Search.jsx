import "./Search.css";
import { useState } from "react";
import menuData from "../../assets/menuData";
import { useCart } from "../../contexts/сartContext/CartContext";
import Navigate from "../../components/navigate/Navigate";

const Search = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredData = filterStructure(menuData, searchTerm);

  return (
    <>
      <div className="search">
        <Navigate />
        <input
          autoFocus
          className="search-field"
          type="text"
          placeholder="Поиск товаров..."
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
                        <div className="card-result" key={item.id}>
                          <div>{item.name}</div>
                          <div>{item.price}</div>
                          <div
                            className="result-add-button"
                            onClick={() => addToCart(item)}
                          >
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
            <p className="no-results">Товары не найдены</p>
          )
        ) : null}
      </div>
    </>
  );
};

export default Search;
