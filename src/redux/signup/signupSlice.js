import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SIGNUP_USER = 'redux/singup/';

const token = localStorage.getItem('token') || null;

export const signupUser = createAsyncThunk(SIGNUP_USER, async (userInfo, thunkAPI) => {
  const API_URL = 'http://localhost:3000/users';
  const requestOptions = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    return await axios.post(API_URL, JSON.stringify(userInfo), requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error, "Error creating request");
  }
});

const initialState = {
  token,
  isLoading: false,
  error: null,
  success: false,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers(reduce) {
    reduce
      .addCase(signupUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.data.token);
        return {
          ...state,
          isLoading: false,
          success: true,
          token: action.payload.data.token,
        };
      })
      .addCase(signupUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(signupUser.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.payload.error,
      }));
  },
});

export default signupSlice.reducer;
