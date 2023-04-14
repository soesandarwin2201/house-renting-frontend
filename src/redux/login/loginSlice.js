import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN } from '../apiEndpoints';

const LOGIN_USER = 'redux/login/';

export const getAccessToken = createAsyncThunk(LOGIN_USER, async (userInfo, thunkAPI) => {
  const requestOptions = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    return await axios.post(LOGIN, JSON.stringify(userInfo), requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error, "Error creating request");
  }
});

const token = localStorage.getItem('token') || null;

const initialState = {
  token,
  isLoading: false,
  error: null,
  success: false,
};

export const loginSlice = createSlice({
  name: 'login',
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
  extraReducers: (reduce) => {
    reduce
      .addCase(getAccessToken.fulfilled, (state, action) => {
       token = localStorage.setItem('token', action.payload.data.token);
        console.log(action.payload.data)
        return {
          ...state,
          isLoading: false,
          success: true,
          token: action.payload.data.token,
        };
      })
      .addCase(getAccessToken.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getAccessToken.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.payload.error,
      }));
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
