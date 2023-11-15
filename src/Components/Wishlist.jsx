import React, { useContext } from 'react';
import { WishlistContext } from '../ContextApis/WishlistContext';
import ProductsContext from '../ContextApis/ProductsContext';
import { Link } from 'react-router-dom';
import style from "../Styles/Products.module.css"

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {wishlist.length === 0 ? (
        <div className="d-flex flex-wrap container gap-3 justify-content-center mt-3 ">
          <div>
            <img src={require('../images/empty wishlist.jpeg')} alt="Empty Wishlist" width={'70%'} style={{ marginLeft: '17%' }} /> <br />
            <Link to={'/Home'}>
              <button className="btn btn-danger px-5" style={{ marginLeft: '40%' }}> Start Shopping </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='text-center' style={{ marginTop: '5%' }}> My Wishlist</h2>
          <div className="d-flex flex-wrap gap-3 justify-content-center container">
            {wishlist.map((productId) => {
              // Find the product associated with the productId
              const item = products.find((product) => product.id === productId);

              if (item) {
                return (
                  <div className={style.card}>
                  <div className="card h-100 " key={item.id}>
                    <Link to={`/productDetails/${item.id}`}>
                      <img src={item.image} className="card-img-top w-100" alt="..." style={{ height: '330px' }} />
                    </Link>
                    <div className="card-body">
                      <span className='d-flex'>
                        <h4 className="card-title">{item.title}</h4>
                        <button className='btn border-1 rounded-circle ms-3' onClick={() => removeFromWishlist(productId)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                          </svg>
                        </button>
                      </span>
                      <h6 className="card-text">Price: ${item.price}</h6>
                    </div>
                  </div>
                  </div>
                );
              }
              // If item is undefined (product not found), it can return a message 
              return (
                <div key={productId}>
                  <p>Product not found or removed</p>
                  <button className='btn border-1 rounded-circle' onClick={() => removeFromWishlist(productId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
