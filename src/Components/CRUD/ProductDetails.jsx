import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsContext from '../../ContextApis/ProductsContext';
import { UsersContext } from '../../ContextApis/UsersContext';
import { CartContext } from '../../ContextApis/CartContext';
import { WishlistContext } from '../../ContextApis/WishlistContext';
import StarRating from '../StarsRating';

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductById, products } = useContext(ProductsContext);
  const [productItem, setProductItem] = useState({});
  const { CurrentUser } = useContext(UsersContext);
  const { AddToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [addedToCart, setAddedToCart] = useState(Array(products.length).fill(false));
  
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id)
      .then((productData) => {
        console.log('Product Data:', productData);
        setProductItem(productData);

        const productIndex = products.findIndex((product) => product.id === productData.id);
        setAddedToCart((prevAddedToCart) => {
          const updatedAddedToCart = [...prevAddedToCart];
          updatedAddedToCart[productIndex] = false;
          return updatedAddedToCart;
        });
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id, getProductById, products]);

  
  if (!productItem) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (productId, price) => {
    if (!CurrentUser) {
      showSignInToastAndRedirect();
    } else {
      AddToCart(productId, price);
      const productIndex = products.findIndex((product) => product.id === productId);
      setAddedToCart([...addedToCart.slice(0, productIndex), true, ...addedToCart.slice(productIndex + 1)]);
    }
  };

  const handleWishlistToggle = (productId) => {
    if (!CurrentUser) {
      showSignInToastAndRedirect();
    } else {
      if (wishlist.includes(productId)) {
        removeFromWishlist(productId);
      } else {
        addToWishlist(productId);
      }
    }
  };

  const showSignInToastAndRedirect = () => {
    toast.error('You must sign in first');
    navigate('/User/signin');
  };

  return (
    <div className="container" style={{ width: '70%', marginTop: '7%' }}>
      <div className="card mb-3">
        <div className="row g-0" key={productItem.id}>
          <div className="col-md-6 w-50">
            <img src={productItem.image} className="img-fluid rounded-start" alt="..." width={'340px'} height={''} />
          </div>
          
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{productItem.title}</h2>
              <h5 className="card-text">Price: ${productItem.price}</h5>
              <p className="card-text">{productItem.description}</p>
              <h6 className="card-text d-flex ">
                Category: {productItem.category}
                <span className="ms-5 mb-3">
                  <StarRating rating={productItem.rating} count={productItem.count} />
                </span>
              </h6>

              {CurrentUser?.role === 'admin' ? (
                <div>
                  <Link to={`/Admin/EditProduct/${productItem.id}`} className={`btn btn-dark px-5 me-3 w-100`}>
                    Edit
                  </Link>
                </div>
              ) : (
                <div>
                  {addedToCart[products.findIndex((product) => product.id === productItem.id)] ? (
                    <button className="btn btn-success px-5 w-75" disabled>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>  Added to cart
                    </button>
                  ) : (
                    <button className="btn btn-success px-5 w-75" onClick={() => handleAddToCart(productItem.id, productItem.price)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg> Add to Cart
                    </button>
                  )}

                  {wishlist.includes(productItem.id) ? (
                    <button className="btn border-1 rounded-circle ms-3" onClick={() => handleWishlistToggle(productItem.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                    </button>
                  ) : (
                    <button className="btn border-1 rounded-circle ms-3" onClick={() => handleWishlistToggle(productItem.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.280 8.717 2.010L8 2.748zM8 15C-7.333 4.868 3.279-3.040 7.824 1.143c.060.055.119.112.176.171a3.120 3.120 0 0 1 .176-.170C12.720-3.042 23.333 4.867 8 15z"/>
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
