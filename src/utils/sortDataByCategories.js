function sortDataByCategory(data) {
  // Create an object to store products by category
  const productsByCategory = {};

  // Iterate over the data array and group products by category
  data.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });

  return productsByCategory;
}

// Usage example:
//   const sortedData = sortDataByCategory(data);
//   console.log(sortedData);

export default sortDataByCategory;
