import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../constants";

export const getOrderProgress = createAsyncThunk(
  "order/getOrderProgress",
  async (data, thunkAPI) => {
    const queryParams = new URLSearchParams();
    queryParams.append("package_id", data.package_id);

    const requestOptions = {
      method: "GET",
    };

    try {
      const response = await fetch(
        `${apiUrl}/get_progress?${queryParams.toString()}`,
        requestOptions
      );

      if (!response.ok) {
        let errorMessage = "Network response was not ok";
        let errorText = "";

        try {
          errorText = await response.text();
          const errorObj = JSON.parse(errorText);
          errorMessage = errorObj.msg || errorMessage;
        } catch (e) {
          errorMessage = errorText || errorMessage;
        }

        throw new Error(errorMessage || "Unknown error occurred");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getOrderProgressSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    status: "idle", // 'idle' | 'loading' | 'success' | 'error'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrderProgress.fulfilled, (state, action) => {
        console.log(action.payload);
        state.order = action.payload;
        state.status = "success";
        state.error = null;
      })
      .addCase(getOrderProgress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export default getOrderProgressSlice.reducer;
