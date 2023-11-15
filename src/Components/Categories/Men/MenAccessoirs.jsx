import React, { useState , useContext} from 'react';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate , Link} from 'react-router-dom'; 
import ProductsContext from '../../../ContextApis/ProductsContext';
import { UsersContext } from "../../../ContextApis/UsersContext";
import { CartContext } from "../../../ContextApis/CartContext";
import { WishlistContext } from '../../../ContextApis/WishlistContext';
import style from "../../../Styles/Products.module.css"

const MenAccessoirs = (props) => {
    const navigate = useNavigate();

    const { products, getProductsByType} = React.useContext(ProductsContext);
    const MenAccessoirs = getProductsByType('menaccessoirs');

    const {CurrentUser}=useContext(UsersContext);
    const {AddToCart}=useContext(CartContext);
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext); 

    const [addedToCart, setAddedToCart] = useState(Array(products.length).fill(false));
  
    const handleAddToCart = (productId, price, index) => {
      if (!CurrentUser) {
        showSignInToastAndRedirect();
      } else {
        AddToCart(productId, price);
        const updatedAddedToCart = [...addedToCart];
        updatedAddedToCart[index] = true;
        setAddedToCart(updatedAddedToCart);
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
        
        <div>
          <div className="d-flex flex-wrap gap-3 justify-content-center container" style={{marginTop:'7%'}}>
            {MenAccessoirs?.map((productItem, index) => {
              return (
                <div className={style.card}>
                  <div className="card h-100" key={productItem.id}>
                    <Link to={`/productDetails/${productItem.id}`}>
                      <img src={productItem.image} className="card-img-top w-100" alt=".." height={'330px'} /> 
                    </Link>

                    <div className="card-body">
                      <h5 className="card-title">{productItem.title}</h5>
                      <h6 className="card-text">Price: ${productItem.price}</h6>
                    
                      {CurrentUser?.role === 'admin' ? (
                        <div>
                          <Link to={`/Admin/EditProduct/${productItem.id}`} className={`btn btn-dark px-5 me-3 w-100`}>
                            Edit
                          </Link>
                        </div>
                      ) : (
                        <div>
                          {addedToCart[index] ? (
                            <button className="btn btn-success px-5 w-75" disabled>
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                              </svg>  Added to cart
                            </button>
                          ) : (
                            <button className="btn btn-success px-5 w-75"
                              onClick={() => handleAddToCart(productItem.id, productItem.price, index)} >
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                              </svg> Add to Cart
                            </button>
                          )}

                          {wishlist.includes(productItem.id) ? (
                            <button className="btn border-1 rounded-circle  ms-3" onClick={() => handleWishlistToggle(productItem.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                              </svg>
                            </button>
                          ) : (
                            <button className="btn border-1 rounded-circle ms-3" onClick={() => handleWishlistToggle(productItem.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }) } 
          </div>
        </div>
    );
};

export default MenAccessoirs;