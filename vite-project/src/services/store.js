// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer'; // Pastikan path-nya benar

const store = configureStore({
  reducer: {
    cart: cartReducer, // Anda dapat menambahkan reducer lain di sini jika diperlukan
  },
});

export default store;

// store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import rootReducer from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

// export { store, persistor };
