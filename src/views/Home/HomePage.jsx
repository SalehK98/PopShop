import useDataFetcher from "../../hooks/useDataFetcher";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import SubHeader from "../../components/SubHeader/SubHeader";

export default function HomePage() {
  const [data, isLoading, error] = useDataFetcher();

  const iterateOverData = () => {
    return data[0].map((productObj, idx) => {
      return (
        <div key={idx}>
          <ProductCard productObj={productObj} />
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
        <Header />
        <div>
          <SubHeader data={data} />
          <div>{iterateOverData()}</div>
        </div>
      </div>
    );
  }
}
