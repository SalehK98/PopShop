import React from "react";
import useDataFetcher from "../../hooks/useDataFetcher";
import Header from "../../components/Header/Header";

export default function HomePage() {
  const [data, isLoading, error] = useDataFetcher();

  const iterateOverData = () => {
    return data.map((productObj, idx) => {
      return (
        <div key={idx}>
          {productObj.title}, {productObj.price}
          <p></p>
        </div>
      );
    });
  };

  if (isLoading) return <>Loading ....</>;
  if (error) return <>error {error.message}</>;
  if (data) {
    return (
      <div>
        page container
        <div>
          <Header />
        </div>
        <div>
          main content<div>title and sort</div>
          <div>
            product
            {/* {iterateOverData()} */}
          </div>
        </div>
      </div>
    );
  }
}
