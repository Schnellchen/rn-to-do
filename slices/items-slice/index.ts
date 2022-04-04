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
	},
});

export const itemsReducer = itemsSlice.reducer;

export const { addItem, changeStatus, changeContent, removeItem } =
	itemsSlice.actions;
