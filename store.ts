import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from 'reducer';

export const store = configureStore({
	reducer,
});

export type Store = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
