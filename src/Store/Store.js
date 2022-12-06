import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice';
import { productSlice } from './Slices/ProductSlice';


const store=configureStore(
{

  reducer:{
    authSlice:AuthSlice,
    products:productSlice,
  }

}
)


export default store;
