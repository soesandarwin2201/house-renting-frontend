import { configureStore } from '@reduxjs/toolkit';
import registrationSlice from './registerationForm/registration';

const store = configureStore({
     reducer: {
          register: registrationSlice,
     },
});

export default store;