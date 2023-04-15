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

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token,
    isLoading: false,
    success: false,
    error: '',
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        success: false,
        error: '',
        token: '',
        status: '',
      };
    },
  },
  extraReducers: (reduce) => {
    reduce
      .addCase(getAccessToken.pending, (state) => ({
        ...state,
        isLoading: true,
      }));
    reduce.addCase(getAccessToken.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isLoading: false,
        success: true,
        token: action.payload.data.token,
        status: action.payload.status,
      };
    });
    reduce.addCase(getAccessToken.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      success: false,
      // error: action.payload.error.message,
    }));
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
