import styles from "../../styles/ProductModalCard.module.css";
import image from "../../../public/vite.svg";

export default function ProductModalCard({ setIsModalOpen, modalData }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{modalData.title}</h3>
        <button onClick={() => setIsModalOpen(false)}>X</button>
      </div>
      <div className={styles.content}>
        <img src={modalData.image} className={styles.imgTag} />
        <div className={styles.productInfo}>
          <p className={styles.category}>Category: {modalData.category}</p>
          <p className={styles.description}>Desc.: {modalData.description}</p>
          <div className={styles.rating}>
            <p>rate: {modalData.rating.rate}</p>
            <p>count: {modalData.rating.count}</p>
          </div>
          <p className={styles.price}>Price ${modalData.price}</p>
        </div>
      </div>
    </div>
  );
}
