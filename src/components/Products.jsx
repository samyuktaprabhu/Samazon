import { ProductTiles } from "./common/ProductTiles";
import { productRange } from "../assets/data/productsData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Products = () => {
  const { category } = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [ratingSliderValue, setRatingSliderValue] = useState(0);
  const [sortbyPrice, setSortByPrice] = useState("low-to-high");
  const [selectedRadioOption, setSelectedRadioOption] = useState(null);

  const handleClearFilters = () => {
    setRatingSliderValue(0);
    setSortByPrice("low-to-high");
    setSelectedRadioOption(null);
  };

  const handleOptionChange = (event) => {
    setSortByPrice(event.target.value);
    setSelectedRadioOption(event.target.value);
  };

  const handleRatingSlider = (event) => {
    setRatingSliderValue(event.target.value);
    setSortByPrice(event.target.value);
  };

  useEffect(() => {
    setFilteredProducts(
      productRange.filter((c) => c.category.toLowerCase() === category)
    );
  }, [ratingSliderValue, sortbyPrice, selectedRadioOption]);

  return (
    <>
      <div>
        <h2>Filters</h2>
      </div>
      <div>
        <div>
          <h3>Price</h3>
          <input
            type="radio"
            id="low-to-high-price"
            name="price-sort"
            checked={selectedRadioOption === "low-to-high"}
            value="low-to-high"
            onChange={handleOptionChange}
          />
          <label htmlFor="low-to-high-price">Price - Low to High</label>
          <input
            type="radio"
            id="high-to-low-price"
            name="price-sort"
            value="high-to-low"
            checked={selectedRadioOption === "high-to-low"}
            onChange={handleOptionChange}
          />
          <label htmlFor="high-to-low-price">Price - High to Low</label>
        </div>
        <div>
          <h3>Ratings</h3>
          <input
            type="range"
            id="slider"
            name="slider"
            min="0"
            max="5"
            step="0.5"
            defaultValue={0}
            value={ratingSliderValue}
            onChange={handleRatingSlider}
          />
        </div>
        <div>
          <button onClick={handleClearFilters}>Clear Filters</button>
        </div>
        <ProductTiles
          products={filteredProducts}
          rating={ratingSliderValue}
          sortType={sortbyPrice}
        />
      </div>
    </>
  );
};
