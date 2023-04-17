import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETHOUSES } from "../apiEndpoints";
// actions
const GET_HOUSES = "redux/houses";
const GET_HOUSE = "redux/houses/house";
const ADD_HOUSE = "redux/houses/house/add";
const REMOVE_HOUSE = "redux/houses/house/remove";

// show all houses
export const fetchHouses = createAsyncThunk(GET_HOUSES, async (thunkAPI) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(GETHOUSES, requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

// show the a house
export const showHouse = createAsyncThunk(GET_HOUSE, async (id, thunkAPI) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(`${GETHOUSES}/${id}`, requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

// add a house
export const addHouse = createAsyncThunk(ADD_HOUSE, async (data, thunkAPI) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(GETHOUSES, data, requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

// remove a house
export const removeHouse = createAsyncThunk(REMOVE_HOUSE, async (id, thunkAPI) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.delete(`${GETHOUSES}/${id}`, requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const initialState = {
  houses: [],
  isLoading: false,
  success: false,
  error: '',
  house: null,
  response: null,
};

const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (reduce) => {
    // show houses reducers
    reduce
      .addCase(fetchHouses.fulfilled, (state, action) => (
        {
          ...state,
          isLoading: false,
          success: true,
          houses: action.payload.data,
        }))
      .addCase(fetchHouses.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchHouses.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.payload,
      }));

    // show house reducer
    reduce
      .addCase(showHouse.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(showHouse.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        success: true,
        house: action.payload.data,
      }))
      .addCase(showHouse.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));

    // add reducer
    reduce
      .addCase(addHouse.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(addHouse.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        success: true,
        response: action.payload.data.data,
      }))
      .addCase(addHouse.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        errors: action.payload.data.errors,
      }));

    // delete reducer
    reduce
      .addCase(removeHouse.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(removeHouse.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        success: true,
        id: action.payload.data.data,
      }))
      .addCase(removeHouse.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.data.error,
      }));
  },
});

export default houseSlice.reducer;
