import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';

import { ProductsContextProvider } from './ContextApis/ProductsContext.jsx';
import { SearchProvider } from './ContextApis/SearchContext';
import { WishlistProvider } from './ContextApis/WishlistContext';
import UsersProvider from './ContextApis/UsersProvider';
import CartProvider from './ContextApis/CartProvider';

import Navbar from './Components/Shared/Navbar';
import NotFoundPage from './Components/NotFoundPage';
import Footer from './Components/Shared/Footer.jsx';
import TermsConditions from './Components/Terms&Conditions.jsx';
import EditAccount from './Components/CRUD/EditAccount.jsx';

const Home =  lazy(() => import ( './Components/Home.jsx'))
const SignIn = lazy(() => import('./Components/User/Signin.jsx'))
const SignUp = lazy(() => import('./Components/User/SignUp'))

const WomenClothing = lazy(() => import('./Components/Categories/Women/Women'))
const WomenDresses = lazy(() => import('./Components/Categories/Women/WomenDresses'))
const WomenTshirts = lazy(() => import('./Components/Categories/Women/WomenTshirts'))
const ShoesBags = lazy(() => import('./Components/Categories/Women/Shoes&Bags'));
const WomenAccessoirs = lazy(() => import('./Components/Categories/Women/WomenAccessoirs'))
const WomenSports = lazy(() => import('./Components/Categories/Women/WomenSports'))

const MenClothing = lazy(()=> import('./Components/Categories/Men/Men'))
const MenTshirts = lazy(() => import('./Components/Categories/Men/MenTshirts'))
const MenShoes = lazy(() => import('./Components/Categories/Men/MenShoes'))
const MenBottoms = lazy(() => import('./Components/Categories/Men/MenBottoms'))
const MenAccessoirs = lazy(() => import('./Components/Categories/Men/MenAccessoirs'))
const MenJacket = lazy(() => import('./Components/Categories/Men/MenJackets'))

const Kids = lazy(() => import('./Components/Categories/Kids/Kids'))

const AboutUs = lazy(() => import('./Components/AboutUs.jsx'))

const ProductDetails = lazy(() => import('./Components/CRUD/ProductDetails'))
const SearchResults = lazy(() => import('./Components/SearchResult'))
const Cart = lazy(() => import('./Components/Cart.jsx'))
const Wishlist = lazy(() => import('./Components/Wishlist'))

const AddProducts = lazy(()=> import('./Components/CRUD/AddProducts'))
const EditProducts = lazy(()=> import('./Components/CRUD/EditProduct'))
const EditUsers =lazy(()=> import('./Components/CRUD/EditUsers'))


function App( ) {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="spinner-border text-center text-primary" role="status" style={{ marginLeft: '50%' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        }>
        <UsersProvider>
          <CartProvider>
            <BrowserRouter>
              <ToastContainer autoClose={3000} />
              <SearchProvider>
                <Navbar />
                <ProductsContextProvider>
                  <WishlistProvider>
                    <Routes>
                    {["Home", "/", "Fashion-Ecommerce-react.js-website"].map((path, index) => (
                      <Route path={path} element={<Home />} key={index} />
                    ))}
                    
                      <Route path="/AboutUs" element={<AboutUs />} />
                      <Route path="/Terms&Conditions" element={<TermsConditions />} />

                      <Route path="/User/signin" element={<SignIn />} />
                      <Route path="/User/signup" element={<SignUp />} />
                      <Route path="/EditAccount/:id" element={<EditAccount />} />


                      <Route path="/women" element={<WomenClothing />} />
                      <Route path="/women/shoes&bags" element={<ShoesBags />} />
                      <Route path="/women/accessoirs" element={<WomenAccessoirs />} />
                      <Route path="/women/dresses" element={<WomenDresses />} />
                      <Route path="/women/sports" element={<WomenSports />} />
                      <Route path="/women/T-shirts" element={<WomenTshirts />} />

                      <Route path="/men" element={<MenClothing />} />
                      <Route path="/men/T-shirts" element={<MenTshirts />} />
                      <Route path="/men/jackets" element={<MenJacket />} />
                      <Route path="/men/shoes" element={<MenShoes />} />
                      <Route path="/men/bottoms" element={<MenBottoms />} />
                      <Route path="/men/accessoirs" element={<MenAccessoirs />} />

                      <Route path="/kids" element={<Kids />} />
                      
                      <Route path="/productDetails/:id" element={<ProductDetails />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/wishlist" element={<Wishlist />} />

                      <Route path="/Admin/AddProduct" element={<AddProducts />} />
                      <Route path="/Admin/EditProduct/:id" element={<EditProducts />} />
                      <Route path="/Admin/EditUser" element={<EditUsers />} />
                      <Route path="/searchResults" element={<SearchResults />} />
                      
                      <Route path="*" element={<NotFoundPage />} />

                    </Routes>
                  </WishlistProvider>
                </ProductsContextProvider>
                <Footer></Footer>
              </SearchProvider>
            </BrowserRouter>
          </CartProvider>
        </UsersProvider>
      </Suspense>
    </Fragment>
  );
}

export default App;
