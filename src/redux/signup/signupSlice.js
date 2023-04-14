import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { json } from 'react-router-dom/dist';


const SIGNUP_USER = 'redux/singup/';

const token = localStorage.getItem('token') || null;

const userInfo = {
  name: 'John Doe',
  email: 'envkt@example.com',
  password: '123456789',
};

const signupUser = createAsyncThunk(SIGNUP_USER, async (thunkAPI) => {
    const API_URL = 'http://localhost:3000/users'
  const requestOptions = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    return await axios.post(API_URL, JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
  
      }),  requestOptions);
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

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        success: false,
        error: '',
        token: '',
      };
    },
  },
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
