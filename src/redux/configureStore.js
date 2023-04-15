import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import registrationSlice from './registerationForm/registration';

const store = configureStore({
     middleware: [logger, thunk],
     reducer: {
          register: registrationSlice,
     },
});

export default store;