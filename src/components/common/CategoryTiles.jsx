import { useNavigate } from "react-router-dom";

export const CategoryTiles = (props) => {
  const navigate = useNavigate();
  const handleSelectCategory = (category) => {
    return navigate("/products/" + category);
  };

  return (
    <>
      {props.categories.map((category) => {
        return (
          <div
            class="category-tile category"
            onClick={() => handleSelectCategory(category.name)}
          >
            <img class="img" src={category.image} alt={category.name}></img>
            <h3 class="h3">{category.name}</h3>
          </div>
        );
      })}
    </>
  );
};
