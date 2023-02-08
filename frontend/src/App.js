import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { toast, ToastContainer, } from "react-toastify"
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';

//profile and password details
import Profile from './components/user/Profile';
import UpdateProfile from "./components/user/UpdateProfile"
import UpdatePassword from './components/user/UpdatePassword';
import ProtectedRoute from './components/route/ProtectedRoute';
import ForgotPassword from './components/user/ForgotPassword';
import Newpassword from './components/user/Newpassword';

//cart import
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Ordersuccess from './components/cart/Ordersuccess';
// order import
import ListOrder from './components/order/ListOrder';
import OrderDetails from './components/order/OrderDetails';

//admin import
import Dashboard from './components/admin/Dashbord';

import { loadUser } from './action/userActions';
import store from "./store"

// import { useEffect } from 'react';


function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div>
        <ToastContainer position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />

        <Header />
        <div className="container container-fluid homePage">
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} exact />
            <Route path='/cart' element={<Cart />} exact />
            <Route path='/shipping' element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
            <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
            <Route path='/success' element={<ProtectedRoute><Ordersuccess /></ProtectedRoute>} />



            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/password/forgot' element={<ForgotPassword />} exact />
            <Route path='/password/reset/:token' element={<Newpassword />} exact />


            <Route path='/me' element={<ProtectedRoute><Profile /></ProtectedRoute>} exact />
            <Route path='/me/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} exact />
            <Route path='/password/update' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} exact />

            <Route path='/orders/me' element={<ProtectedRoute><ListOrder /></ProtectedRoute>} exact />
            <Route path='/orders/:id' element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} exact />



          </Routes>
        </div>
        <Routes>
          <Route path='/dashbord' element={<ProtectedRoute isAdmin={true} ><Dashboard /></ProtectedRoute>} exact />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
// 