import React from "react";
import useDataFetcher from "../../hooks/useDataFetcher";

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
    console.log("after fetch and inside homepage", data);
    return <>{iterateOverData()}</>;
  }
}
