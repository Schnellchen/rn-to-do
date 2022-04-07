import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, InitialState } from 'types';

const initialState: InitialState = {
	items: [],
};

const itemsSlice = createSlice({
	name: 'items',
	initialState: initialState,
	reducers: {
		addItem: (state, { payload }: PayloadAction<Item>) => {
			state.items.push(payload);
		},
		changeStatus: (state, { payload }: PayloadAction<string>) => {
			const index = state.items.findIndex((item) => item.id === payload);
			state.items[index].status = !state.items[index].status;
		},
		changeStatuses: (state, { payload }: PayloadAction<boolean>) => {
			state.items = state.items.map((item) => {
				item.status = payload;

				return item;
			});
		},
		changeContent: (
			state,
			{
				payload: { id, content },
			}: PayloadAction<{ id: string; content: string }>,
		) => {
			const index = state.items.findIndex((item) => item.id === id);
			state.items[index].content = content;
		},
		removeItem: (state, { payload }: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== payload);
		},
		removeCompleted: (state) => {
			state.items = state.items.filter((item) => !item.status);
		},
	},
});

export const itemsReducer = itemsSlice.reducer;

export const {
	addItem,
	changeStatus,
	changeContent,
	changeStatuses,
	removeItem,
	removeCompleted,
} = itemsSlice.actions;
