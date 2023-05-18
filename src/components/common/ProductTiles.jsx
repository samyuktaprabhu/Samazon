export const ProductTiles = (props) => {
  return (
    <>
      {props.products[0].products.map((product) => (
        <div class="category-tile category">
          <img class="img" src={product.image} alt={product.name}></img>
          <h3 class="h3">{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: €{product.price}</p>
          <p># of pieces available: €{product.availablePieces}</p>
          <p>Rating: {product.rating} ⭐️ </p>
          <button>Add To Cart</button>
          <button>Add To Wishlist</button>
        </div>
      ))}
    </>
  );
};
