import { CategoryTiles } from "./common/CategoryTiles";
import books from "../assets/productCategories/books.svg";
import games from "../assets/productCategories/games.svg";
import home from "../assets/productCategories/home.svg";
import clothes from "../assets/productCategories/clothes.svg";
import phones from "../assets/productCategories/phones.svg";
import medicines from "../assets/productCategories/meds.svg";

export const HomePage = () => {
  const categories = [
    { name: "Games", image: games },
    { name: "Books", image: books },
    { name: "Home", image: home },
    { name: "Clothes", image: clothes },
    { name: "Electronics", image: phones },
    { name: "Medicines", image: medicines },
  ];

  return (
    <>
      <h1>Categories</h1>
      <div class="category-container">
        <CategoryTiles categories={categories} />
      </div>
    </>
  );
};
