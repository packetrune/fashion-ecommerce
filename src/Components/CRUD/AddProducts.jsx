import React, { useEffect, useId, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../ContextApis/UsersContext";
import ProductsContext from "../../ContextApis/ProductsContext";

function AddProducts() {
  const navigate=useNavigate();
  const {CurrentUser}=useContext(UsersContext);
  const { addProduct } = useContext(ProductsContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (CurrentUser?.role !== 'admin') {
      navigate('/404');
    }
  }, [CurrentUser, navigate]);
  
  let [prdct, setPrdct] = useState({
    id: useId(),
    title: "",
    price: 0,
    description: "",
    image:
      "https://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png",
    category: "",
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setPrdct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let handleSubmit = (e) => {
    addProduct(prdct);
    e.preventDefault();
  };

  return (
    <div className="mt-3 p-5 container w-75 mb-5 mt-5">
      <h1 className="text-center text-dark pb-4">
        Add Product
      </h1>
      <form onSubmit={handleSubmit} className=" form p-3">
        <div className="form-floating mb-3  ">
          <input
            type="text"
            className="form-control "
            id="title"
            name="title"
            value={prdct.title}
            onChange={handleChange}
            ref={inputRef}
          />
          <label htmlFor="title">Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={prdct.price}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
        </div>
        
        <div className=" form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={prdct.category}
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={prdct.description}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={prdct.image}
            onChange={handleChange}
          />
          <label htmlFor="image">Image Url</label>
        </div>

        <div className="mb-3">
          <div className="text-center">
            <button
            className="btn btn-dark mx-2 text-light px-5 py-2 b-0 "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
