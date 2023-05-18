import { CategoryTiles } from "./common/CategoryTiles";

export const Products = () => {
  const categories = [
    { name: "Games" },
    { name: "Books" },
    { name: "Home" },
    { name: "Clothes" },
    { name: "Phones" },
  ];

  return (
    <>
      <div>Hello</div>
      <CategoryTiles categories={categories} />
    </>
  );
};
