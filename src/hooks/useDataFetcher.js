import { useState, useEffect } from "react";

const fetchData = async () => {};

function useDataFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndHandleState = async () => {
      const { data, error } = await fetchData();
    };

    fetchDataAndHandleState();
  });

  return [data, isLoading, error];
}

export default useDataFetcher;
