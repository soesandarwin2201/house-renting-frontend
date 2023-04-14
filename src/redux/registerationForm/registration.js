import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const BASE_URL = process.env.BASE_URL;

const initialState = {
     isLoading: false,
     success: false,
     error: '',
     message: '',
};

export const registerData = createAsyncThunk('register/registerData', async(name,email,password, thunkAPI) => {
     const API_URL = `http://127.0.0.1:3000/signup`;
     const options = {
          method: 'POST',
          headers: {
               'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
          body: JSON.stringify({name, email, password })
        };
        try {
          const response = await fetch(API_URL, options);
          const data = await response.json();
          console.log(data);
          return data;
        } catch (err) {
          console.log(err);
          return thunkAPI.rejectWithValue(err.message);
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
          builder.addCase( registerData.pending, (state) => {
               state.isLoading = true;
               state.success = false;
          });
          builder.addCase(registerData.fulfilled, (state, action) => {
               state.isLoading = false;
               state.success = true;
               console.log(action.payload);
               state.message = action.payload;
          });
          builder.addCase(registerData.rejected, (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          })
     }
});

export const { reset } = registrationSlice.actions;
export default registrationSlice.reducer;