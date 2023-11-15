import axios from 'axios';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductsContext from '../../ContextApis/ProductsContext';
import { UsersContext } from '../../ContextApis/UsersContext';

function EditProducts() {
  const navigate = useNavigate();
  const { CurrentUser } = useContext(UsersContext);
  const { deleteProduct, editProduct } = useContext(ProductsContext);
  const inputRef = useRef(null);
  const { id } = useParams();

  const [prdct, setPrdct] = useState({
    id: id, 
    title: '',
    price: 0,
    description: '',
    image:
      'https://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png',
    category: '',
  });

  useEffect(() => {
    if (CurrentUser?.role !== 'admin') {
      navigate('/Home');
    }
  }, [CurrentUser, navigate]);

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get(`http://localhost:2000/products/${id}`)
        .then((res) => {
          setPrdct({
            id: res.data.id,
            title: res.data.title,
            price: res.data.price,
            description: res.data.description,
            image: res.data.image,
            category: res.data.category,
          });
        })
        .catch((err) => {
          console.error('Error fetching product:', err);
          console.log('URL for product fetch:', `http://localhost:2000/products/${id}`);
        });
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrdct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    editProduct(prdct.id, prdct);
    e.preventDefault();
    navigate('/Home');
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      navigate('/Home');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  return (
    <div className="mt-3 p-5 container w-75 mb-5 mt-5">
      <h1 className="text-center text-dark pb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={prdct.title}
            onChange={handleChange}
            ref={inputRef}
          />
          <label htmlFor="title">Title</label>
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

        <div className="form-floating mb-3">
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

        <div className="form-floating mb-3">
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
            <button className="btn btn-success mx-2 text-light px-5 py-2 b-0">
              Edit
            </button>
            <button
              className="btn btn-danger mx-2 text-light px-5 py-2 b-0"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProducts;