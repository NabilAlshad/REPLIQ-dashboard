import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  products: [],
  loading: false,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
        state.loading = false;
        state.products=action.payload;
    },
    [getProducts.rejected]: (state, action) => {
        state.loading =false;
    }
  },
});

export default productSlice.reducer;
