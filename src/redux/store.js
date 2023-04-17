import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import loginSlice from './login/loginSlice';
import signupSlice from './signup/signupSlice';
import houseSlice from './house/houseSlice';
import reservationSlice from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    signup: signupSlice,
    houses: houseSlice,
    house: houseSlice,
    reservation: reservationSlice,
  },
  middleware: [logger, thunk],
});

export default store;
