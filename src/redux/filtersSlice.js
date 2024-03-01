import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '',
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setContactsFilter(state, action) {
			state.name = action.payload
		},
	},
})

export const { setContactsFilter } = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
