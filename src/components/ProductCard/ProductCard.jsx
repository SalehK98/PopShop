import styles from "../../styles/ProductCardBox.module.css";

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
      <img src={productObj.image} className={styles.productImg} />
      <div className={styles.productBasicInfo}>
        <h3>{productObj.category}</h3>
        <div className={styles.Wrapper}>
          <p className={styles.title}>{productObj.title}</p>
        </div>
        <p>From ${productObj.price}</p>
        <p>rate {productObj.rating.rate}</p>
      </div>
    </div>
  );
}
