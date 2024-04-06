export default function ProductCard({ productObj }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <img src={productObj.image} style={{ width: "8rem" }} />
      <h2>{productObj.category}</h2>
      <span>{productObj.title}</span>
      <span>From ${productObj.price}</span>
      <p></p>
      <span>rate {productObj.rating.rate}</span>
    </div>
  );
}
