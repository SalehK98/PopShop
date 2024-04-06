import { useEffect } from "react";
import { createPortal } from "react-dom";
import ProductModalCard from "../ProductModalCard/ProductModalCard";
const overlay = {
  backgroundColor: "rgba(0,0,0,0.7)",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "1000",
  position: "fixed",
};

export default function Modal({ isModalOpen, setIsModalOpen, modalData }) {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  if (!isModalOpen) return <></>;
  return createPortal(
    <>
      <div
        className="overlay"
        style={overlay}
        onClick={() => {
          setIsModalOpen(false);
          document.body.style.overflow = "auto";
        }}
      >
        <ProductModalCard
          setIsModalOpen={setIsModalOpen}
          modalData={modalData}
        />
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
