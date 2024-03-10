import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore=configureStore({
    reducer:{
        cart:cartReducer, 
            // this a whole big reducer of the app,  suppose we're having a customer , then we'll add the customerReducer, and that'll have samll reducers itself to manage slice like this cartReducer

    }
});

export default appStore;