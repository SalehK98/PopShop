import ProductCard from "../ProductCard/ProductCard";
import styles from "../../styles/ProductsList.module.css";

export default function ProductsList({ data, setIsModalOpen, setModalData }) {
  const iterateOverData = () => {
    return data[0].map((productObj) => {
      return (
        <ProductCard
          productObj={productObj}
          key={productObj.id}
          setIsModalOpen={setIsModalOpen}
          setModalData={setModalData}
        />
      );
    });
  };
  return <div className={styles.productsList}>{iterateOverData()}</div>;
}
