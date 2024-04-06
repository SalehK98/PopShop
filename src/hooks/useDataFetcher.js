import { useState, useEffect } from "react";
import sortDataByCategory from "../utils/sortDataByCategories";

const fetchData = async (setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("network response was not okay");
    const rawData = await response.json();
    const sortedData = sortDataByCategory(rawData);
    return { data: [rawData, sortedData], error: null };
  } catch (error) {
    console.log("this is an error ", error, error.message);
    return { data: null, error };
  } finally {
    setIsLoading(false);
  }
};

function useDataFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndHandleState = async () => {
      const { data, error } = await fetchData(setIsLoading);
      setData(data);
      setError(error);
    };

    fetchDataAndHandleState();
  }, []);

  return [data, isLoading, error];
}

export default useDataFetcher;
