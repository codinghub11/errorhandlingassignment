function createProductFilter(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Jeans', category: 'Clothing' },
    { name: 'Smartphone', category: 'Electronics' }
  ];
  
  const filterProductsByCategory = createProductFilter(products);
  
  const electronicsProducts = filterProductsByCategory('Electronics');
  console.log(electronicsProducts);
  
  const clothingProducts = filterProductsByCategory('Clothing');
  console.log(clothingProducts);
  