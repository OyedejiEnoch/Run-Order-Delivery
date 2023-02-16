import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"

import { productsReducer, productDetailsReducer, newProductReducer, productReducer } from "./reducers/productReducers"
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrderReducer, orderReducer } from "./reducers/orderReducers"


const rootReducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    allOrders: allOrderReducer,
    order: orderReducer

})




let preloadedState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
};

const middleware = [thunk]
const store = configureStore({ reducer: rootReducer, preloadedState }, composeWithDevTools(applyMiddleware(...middleware)));


export default store;