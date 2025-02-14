<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
=======
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
>>>>>>> 8cba263 (Initial commit)
