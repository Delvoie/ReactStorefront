import React, {createContext, useState, useEffect} from 'react';

//context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //product state
  const [products, setProducts] = useState([]);
  // fetch from fake store api
  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error('Failed to fetch products', e);
      }
    };
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>

};

export default ProductProvider;
