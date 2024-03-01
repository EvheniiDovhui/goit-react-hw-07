import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './actions'

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: {
		[fetchContacts.pending]: state => {
			state.loading = true
		},
		[fetchContacts.fulfilled]: (state, action) => {
			state.loading = false
			state.items = action.payload
		},
		[fetchContacts.rejected]: (state, action) => {
			state.loading = false
			state.error = action.error.message
		},
		[addContact.pending]: state => {
			state.loading = true
		},
		[addContact.fulfilled]: (state, action) => {
			state.loading = false
			state.items.push(action.payload)
		},
		[addContact.rejected]: (state, action) => {
			state.loading = false
			state.error = action.error.message
		},
		[deleteContact.pending]: state => {
			state.loading = true
		},
		[deleteContact.fulfilled]: (state, action) => {
			state.loading = false
			state.items = state.items.filter(contact => contact.id !== action.payload)
		},
		[deleteContact.rejected]: (state, action) => {
			state.loading = false
			state.error = action.error.message
		},
	},
})

export default contactsSlice.reducer
