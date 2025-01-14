import { configureStore } from '@reduxjs/toolkit';
import Slice from './reducers/slicers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utiliza localStorage para persistência
import { combineReducers } from 'redux';

// Combina os reducers (se houver mais no futuro)
const rootReducer = combineReducers({
  posts: Slice,
});

// Configuração para persistir o estado do Redux
const persistConfig = {
  key: 'root', // Chave raiz para o armazenamento
  storage,
  whitelist: ['posts'], // Define quais reducers serão persistidos
};

// Aplica o persistReducer ao rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura a store com o reducer persistido
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necessário para evitar avisos sobre o redux-persist
    }),
});

// Configura o persistStore
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
