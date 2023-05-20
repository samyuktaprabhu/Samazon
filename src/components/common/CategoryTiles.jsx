import { useNavigate } from "react-router-dom";

export const CategoryTiles = (props) => {
  const navigate = useNavigate();
  const handleSelectCategory = (category) => {
    return navigate("/products/" + category.toLowerCase());
  };

  return (
    <>
      {props.categories.map((category) => {
        return (
          <div
            className="category-tile category"
            onClick={() => handleSelectCategory(category.name)}
            key={category.name}
          >
            <img className="img" src={category.image} alt={category.name}></img>
            <h3 className="h3">{category.name}</h3>
          </div>
        );
      })}
    </>
  );
};
