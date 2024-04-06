import React from "react";
import useDataFetcher from "../../hooks/useDataFetcher";

export default function HomePage() {
  const [data, isLoading, error] = useDataFetcher();

  if (isLoading) return <>Loading ....</>;
  if (error) return <>error {error.message}</>;
  if (data) {
    console.log(data);
    return <div>HomePage</div>;
  }
}
