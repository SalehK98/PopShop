import ProductCard from "../ProductCard/ProductCard";
import styles from "../../styles/ProductsList.module.css";

export default function ProductsList({
  data,
  setIsModalOpen,
  setModalData,
  currentCategory,
  searchTerm,
}) {
  const categories = data[1];
  const allData = data[0];
  let filteredData = allData;

  if (currentCategory !== "All Categories" && !searchTerm) {
    filteredData = categories[currentCategory];
  }

  if (currentCategory !== "All Categories" && searchTerm) {
    filteredData = categories[currentCategory].filter((productObj) => {
      if (
        searchTerm &&
        productObj.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    });
  }

  if (currentCategory === "All Categories" && searchTerm) {
    filteredData = allData.filter((productObj) => {
      if (
        searchTerm &&
        productObj.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    });
  }
  if (currentCategory === "All Categories" && !searchTerm) {
    filteredData = allData;
  }

  const iterateOverData = () => {
    return filteredData.map((productObj) => {
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
