import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { catalogReducer } from '@/redux';

const catalogPersistConfig = {
  key: 'catalog',
  storage,
  whitelist: ['favourites'],
};

const persistedCatalogReducer = persistReducer(
  catalogPersistConfig,
  catalogReducer
);

const store = configureStore({
  reducer: {
    catalog: persistedCatalogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
