import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '', // Початковий стан фільтра за іменем
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setContactsFilter(state, action) {
			// Встановлюємо фільтр за іменем
			state.name = action.payload
		},
	},
})

export const { setContactsFilter } = filtersSlice.actions
export default filtersSlice.reducer
