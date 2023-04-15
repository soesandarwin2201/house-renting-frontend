import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
     isLoading: false,
     success: false,
     error: '',
     message: '',
};

export const signupUser = createAsyncThunk("signup/signupUser", async (user, thunkAPI) => {
     const API_URL = 'http://localhost:3000/users';
     const requestOptions = {
       method: "POST",
       headers: {
         'content-type': 'application/json',
       }
     };
     try {
       return await axios.post(API_URL, JSON.stringify(user), requestOptions);
     } catch (error) {
       return thunkAPI.rejectWithValue(error, "Error creating request");
     }
});

const registrationSlice = createSlice({
     name: 'registration',
     initialState,
     reducers: {
          reset: (state) => ({
               ...state,
           isLoading: false,
          success: false,
          error: '',
          message: '',
          }),
     },
     extraReducers: (builder) => {
          builder.addCase(signupUser.pending, (state) => {
               state.isLoading = true;
               state.success = false;
          });
          builder.addCase(signupUser.fulfilled, (state, action) => {
               state.isLoading = false;
               state.success = true;
               state.message = action.payload.data;
          });
          builder.addCase(signupUser.rejected, (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          })
     }
});

export const { reset } = registrationSlice.actions;
export default registrationSlice.reducer;