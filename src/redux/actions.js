import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchContactsAPI, addContactAPI, deleteContactAPI } from './api' 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
	const response = await fetchContactsAPI()
	return response.data
})

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async contact => {
		const response = await addContactAPI(contact)
		return response.data
	}
)

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async contactId => {
		await deleteContactAPI(contactId)
		return contactId
	}
)
