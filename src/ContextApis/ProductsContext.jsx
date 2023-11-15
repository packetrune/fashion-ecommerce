import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  let [products, setProducts] = useState([]);
  const { children } = props;
  let navigator = useNavigate();

  let getProducts = () => {
    axios
      .get("http://localhost:2000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  let getProductById = (productId) => {
    return axios
      .get(`http://localhost:2000/products/${productId}`)
      .then((res) => res.data) // Return the fetched data
      .catch((err) => { console.log(err);
        throw err; // Rethrow the error to handle it in the component
      });
  };
  
  let deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:2000/products/${productId}`)
      .then(() => getProducts())
      .catch((err) => console.log(err));
  };

  let editProduct = (productId,prdct) => {
    axios.patch(`http://localhost:2000/products/${productId}`, prdct).then(
      ()=>getProducts()
    ).catch((err) => console.log(err));
  };

  let addProduct = (product) => {
    axios.post(`http://localhost:2000/products`, product).then(
      () => getProducts()
    ).catch((err) => console.log(err));
    navigator("/Home");
  };
  
  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  const getProductsByType = (type) => {
    return products.filter((product) => product.type === type);
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  const contextValue = useMemo(() => ({ products }), [products]);

  return (
    <ProductsContext.Provider
      value={{
        products: contextValue.products,
        setProducts,
        getProducts,
        getProductById,
        deleteProduct,
        addProduct,
        editProduct,
        getProductsByCategory,
        getProductsByType
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;