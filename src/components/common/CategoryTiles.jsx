export const CategoryTiles = (props) => {
  return (
    <>
      {props.categories.map((category) => {
        return (
          <div>
            <h2>{category.name}</h2>
            <p>This is a {category.name}'s category</p>
          </div>
        );
      })}
    </>
  );
};
