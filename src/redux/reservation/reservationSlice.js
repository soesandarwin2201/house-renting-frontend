import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SHOWRESERVATION, GETHOUSES } from "../apiEndpoints";

// actions
const GET_RESERVATIONS = "redux/reservations";
const ADD_RESERVATION = "redux/reservations/reservation";
const ADD_HOUSE_RESERVED = "redux/houses/reservations";

export const fatchReservation = createAsyncThunk(GET_RESERVATIONS, async (thunkApi) => {
  const token = localStorage.getItem('token');
  try {
    return await axios.get(SHOWRESERVATION, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    return thunkApi.rejectWithValue(e.response.data.error);
  }
});

export const addReservation = createAsyncThunk(ADD_RESERVATION, async (data, thunkApi) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(SHOWRESERVATION, data, requestOptions);
  } catch (e) {
    return thunkApi.rejectWithValue(e.response.data.error);
  }
});

export const addReservedHouse = createAsyncThunk(ADD_HOUSE_RESERVED,
  async (reservation, thunkApi) => {
    const token = localStorage.getItem('token');
    const { house_id: id } = reservation;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(`${GETHOUSES}/${id}/reservations/add`, reservation, requestOptions);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  });

const initialState = {
  isLoading: false,
  success: false,
  error: '',
  reservations: [],
  response: null,
};

// Reservation Slice
const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  extraReducers: (builder) => {
    // Get Reservations
    builder.addCase(fatchReservation.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(fatchReservation.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      reservations: action.payload.data,
    }));

    builder.addCase(fatchReservation.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));

    // Add Reservation

    builder.addCase(addReservation.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(addReservation.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      response: action.payload.data,
    }));

    builder.addCase(addReservation.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      errors: action.error.message,
    }));

    // Add reservation from house

    builder.addCase(addReservedHouse.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(addReservedHouse.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      response: action.payload.data,
    }));

    builder.addCase(addReservedHouse.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      errors: action.error.message,
    }));
  },
});

export default reservationSlice.reducer;
