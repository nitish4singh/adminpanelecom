import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";
import { act } from "react-dom/test-utils";

export const getusers = createAsyncThunk(
  "customer/get-customers",
  async (thunkAPI) => {
    try {
      return await customerService.getusers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const customerSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getusers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getusers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.customers = action.payload;
        state.message = action.error;
      });
  },
});
export default customerSlice.reducer;
