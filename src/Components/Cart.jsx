import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../ContextApis/CartContext";
import ProductsContext from "../ContextApis/ProductsContext";

const Cart = () => {
  const { CartData, increaseQty, decreaseQty, deleteFromCart, totalPrice, deleteAllCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  // Check if CartData is undefined or null
  if (!CartData || CartData.length === 0) {
    return (
      <div className="container" style={{ marginTop: '7%' }}>
        <div className="row">
          <div className="col-8 m-auto py-3">
            <div>
              <img src={require('../images/empty cart.jpeg')} alt="Empty Cart" width="70%" style={{ marginLeft: "17%" }} /><br />
              <br />
              <Link to={'/Home'}>
                <button className="btn btn-danger px-5" style={{ marginLeft: "40%" }}> Start Shopping </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="row">
        <div className="col-8 m-auto py-3">
          <table className="table table-hover table-dark table-borderless align-middle text-center">
            <thead className="bg-light text-dark">
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th className="">Quantity</th>
                <th className="">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {CartData.map((product) => {
                const item = products.find((e) => e.id === product.id);

                if (item) {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Link to={`/productDetails/${item.id}`}>
                          <img src={item.image} alt="" className="w-100" height={'120px'} />
                        </Link>
                      </td>
                      <td>{item.title}</td>
                      <td className="px-5">
                        <div className="input-group">
                          <button
                            className="btn btn-danger" style={{zIndex:'0'}}
                            onClick={() => decreaseQty(item.id)}
                          >
                            -
                          </button>
                          <input type="text" className="form-control text-center bg-dark text-white border-0 fs-4" value={product.qty} readOnly/>
                          <button
                            className="btn btn-success" style={{zIndex:'0'}}
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => deleteFromCart(item.id)}
                        >
                          <img width="48" height="48" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever" />
                        </button>
                      </td>
                    </tr>
                  );
                }
                return null; // If the product is not found, don't render anything
              })}
            </tbody>
          </table>
          <div className="text-center">
            <h3 className="my-4">{`Total Price: $${totalPrice}`}</h3>
            <button className="btn btn-outline-success fs-4" onClick={deleteAllCart}>CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
