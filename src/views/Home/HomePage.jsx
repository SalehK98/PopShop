import useDataFetcher from "../../hooks/useDataFetcher";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import styles from "../../styles/HomePage.module.css";

export default function HomePage() {
  const [data, isLoading, error] = useDataFetcher();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  if (isLoading) return <>Loading ....</>;
  if (error) return <>error {error.message}</>;
  if (data) {
    return (
      <div className={styles.PageContainer}>
        <Header />
        <div className={styles.mainContent}>
          <SubHeader data={data} />
          <ProductsList
            data={data}
            setIsModalOpen={setIsModalOpen}
            setModalData={setModalData}
          />
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            modalData={modalData}
          />
        </div>
      </div>
    );
  }
}
