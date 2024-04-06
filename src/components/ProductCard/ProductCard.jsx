import styles from "../../styles/ProductCard.module.css";

export default function ProductCard({
  productObj,
  setIsModalOpen,
  setModalData,
}) {
  const handleOpenProduct = () => {
    setIsModalOpen(true);
    setModalData(productObj);
  };
  return (
    <div className={styles.cardContainer} onClick={handleOpenProduct}>
      <img src={productObj.image} style={{ width: "8rem" }} />
      <h2>{productObj.category}</h2>
      <span>{productObj.title}</span>
      <span>From ${productObj.price}</span>
      <p></p>
      <span>rate {productObj.rating.rate}</span>
    </div>
  );
}
