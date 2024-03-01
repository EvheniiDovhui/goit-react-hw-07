import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [], // Початковий стан списку контактів
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact(state, action) {
			// Додавання контакту до списку
			state.items.push(action.payload)
		},
		removeContact(state, action) {
			// Видалення контакту зі списку за його id
			state.items = state.items.filter(contact => contact.id !== action.payload)
		},
	},
})

export const { addContact, removeContact } = contactsSlice.actions
export default contactsSlice.reducer
